<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Course;
use App\Models\Participant;
use App\Models\Speaker;
use App\Traits\DatatableTrait;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\View\View;
use Yajra\DataTables\Facades\DataTables;

class CourseController extends Controller
{
    use DatatableTrait;

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('admin.courses.index');
    }

    /**
     * Display a listing of the resource.
     */
    public function json(Request $request)
    {

        $courses = Course::select('courses.*')
            ->join('speakers', 'courses.speaker_id', '=', 'speakers.id')
            ->whereNull('speakers.deleted_at')
            ->get();

        if ($request->has('participant_id')) {
            $participantId = $request->get('participant_id');
            $participant = Participant::find($participantId);
            $courses = $participant->courses()->with('speaker')->get();
        }

        return DataTables::of($courses)
            // ->addColumn('name', fn ($record) => $record->name)
            ->addColumn('speaker_name', fn ($record) => $record->speaker->full_name)
            ->addColumn('list_categories', function ($record) {
                $html = '';
                $bgColors = [
                    'bg-primary',
                    'bg-dark',
                    'bg-success',
                    'bg-warning',
                    'bg-info',
                    'bg-danger',
                ];

                foreach ($record->categories as $categoryName) {
                    $bgColor = $bgColors[rand(0, 5)];

                    $html .= "<span class='badge text-white {$bgColor} me-1'>{$categoryName}</span>";
                }

                return $html;
            })
            ->addColumn('level', fn ($record) => $record->level)
            ->addColumn('start_date', fn ($record) => $record->start_date->format(config('app.format_time')))
            ->addColumn('end_date', fn ($record) => $record->end_date->format(config('app.format_time')))
            ->addColumn('actions', function ($record) use ($request) {
                $buttons = '';
                if ($request->has('participant_id')) {
                    $buttons = "<a href='javascript:void(0)' class='btn-send-certificate mx-1' data-id='{$record->id}'><i class='ti ti-mail ti-xs'></i></a>";
                }

                $buttons .= $this->getActionsButtons($record->id);

                return $buttons;
            })
            ->rawColumns(['actions', 'list_categories'])
            ->make(true);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $input = $request->all();

        $course = Course::create($input);

        return response()->json([
            'title' => __('Success!'),
            'message' => __('Course was created successfully!'),
            'data' => $course
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): View|JsonResponse
    {
        $course = Course::find($id);

        if (request()->wantsJson()) {
            return response()->json([
                'data' => $course
            ], 200);
        }
        return view('admin.courses.show')->with(['course' => $course]);
    }

    /**
     * Display the specified resource.
     */
    public function showInJson(string $id)
    {
        $course = Course::with(['speaker', 'preferences'])->find($id);

        return response()->json([
            'data' => $course
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $input = $request->all();
        $course = Course::find($id);

        if (!$request->has('categories')) {
            $input['categories'] = [];
        }

        $course->update($input);

        return response()->json([
            'title' => __('Success!'),
            'message' => __('Course was updated successfully!'),
            'data' => $course
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $course = Course::find($id);
        $course->delete();

        return response()->json([
            'title' => __('Success!'),
            'message' => __('Course was deleted successfully!'),
        ], 200);
    }
}
