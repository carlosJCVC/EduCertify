<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\SpeakerRequest;
use App\Http\Requests\SpeakerUniqueEmailRequest;
use App\Models\Speaker;
use App\Traits\CategoryTrait;
use App\Traits\DatatableTrait;
use App\Traits\EducationalExperienceTrait;
use Illuminate\Http\Request;
use Yajra\DataTables\Facades\DataTables;

class SpeakerController extends Controller
{
    use DatatableTrait, EducationalExperienceTrait, CategoryTrait;

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('admin.speakers.index');
    }

    /**
     * Display a listing of the resource.
     */
    public function json(Request $request)
    {
        $speakers = Speaker::with(['experiences'])->get();

        return DataTables::of($speakers)
            ->addColumn('name', fn ($record) => $record->full_name)
            ->addColumn('list_experiences', function ($record) {
                $html = '';

                foreach ($record->experiences as $experience) {
                    $bgColor = $this->getBackgroundGradient();
                    $bgColor = $this->generateRandomColor();

                    $html .= "<span style='background: {$bgColor}' class='badge text-white me-1 mt-1'>{$experience->name}</span>";
                }

                return $html;
            })
            ->addColumn('email', fn ($record) => $record->email)
            ->addColumn('created_at', fn ($record) => $record->created_at)
            ->addColumn('status', fn ($record) => "<div class='badge {$record->status->badgeColor()} text-white'>{$record->status->value}</div>")
            ->addColumn('actions', fn ($record) => $this->getActionsButtons($record->id, false))
            ->rawColumns(['actions', 'status', 'list_experiences'])
            ->make(true);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(SpeakerRequest $request)
    {
        $input = $request->except('educationalExperiences');
        $speaker = Speaker::create($input);

        $experiences = $request->get('educationalExperiences');
        $experiences = $this->storeExperiences($experiences);
        $speaker->experiences()->attach($experiences->pluck('id'));

        if ($request->has('avatar')) {
            $speaker->updateProfilePhoto($request->file('avatar'));
        }

        return response()->json([
            'title' => __('Success!'),
            'message' => __('Speaker was created successfully!'),
            'data' => $speaker
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $speaker = Speaker::find($id);

        return view('admin.speaker.show')->with(['speaker' => $speaker]);
    }

    /**
     * Display the specified resource.
     */
    public function showInJson(string $id)
    {
        $speaker = Speaker::with(['experiences'])->find($id);

        return response()->json([
            'data' => $speaker
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(SpeakerRequest $request, string $id)
    {
        $input = $request->all();
        $speaker = Speaker::find($id);

        $speaker->update($input);

        if ($request->has('avatar')) {
            $file = $request->file('avatar');
            $speaker->updateProfilePhoto($file);
        }

        if ($request->has('educationalExperiences')) {
            $experiences = $request->get('educationalExperiences');
            $experiences = $this->storeExperiences($experiences);
            $speaker->experiences()->sync($experiences->pluck('id'));
        }

        return response()->json([
            'title' => __('Success!'),
            'message' => __('Speaker was updated successfully!'),
            'data' => $speaker
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $speaker = Speaker::find($id);
        $speaker->experiences()->detach();
        $speaker->delete();

        return response()->json([
            'title' => __('Success!'),
            'message' => __('Speaker was deleted successfully!'),
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function verify(SpeakerUniqueEmailRequest $request)
    {
        return response()->json([
            'title' => __('Success!'),
            'message' => __('The email has already been registered.'),
            'valid' => true,
        ], 200);
    }
}
