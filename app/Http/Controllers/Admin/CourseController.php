<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Course;
use App\Models\Participant;
use App\Models\Speaker;
use App\Traits\CategoryTrait;
use App\Traits\DatatableTrait;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\View\View;
use Yajra\DataTables\Facades\DataTables;

class CourseController extends Controller
{
    use DatatableTrait, CategoryTrait;

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
        $courses = Course::with(['categories'])
            ->select('courses.*')
            ->join('speakers', 'courses.speaker_id', '=', 'speakers.id')
            ->whereNull('speakers.deleted_at')
            ->get();

        if ($request->has('participant_id')) {
            $participantId = $request->get('participant_id');
            $participant = Participant::find($participantId);
            $courses = $participant->courses()->with('speaker')->get();
        }

        return DataTables::of($courses)
            ->addColumn('speaker_name', fn ($record) => $record->speaker->full_name)
            ->addColumn('list_categories', function ($record) {
                $html = '';

                foreach ($record->categories as $category) {
                    $bgColor = $this->getBackgroundGradient();
                    $bgColor = $this->generateRandomColor();

                    $html .= "<span style='background: {$bgColor}' class='badge text-white me-1 mt-1'>{$category->name}</span>";
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
        $input = $request->except('categories');
        $course = Course::create($input);

        $categories = $request->get('categories');
        $categories = $this->storeCategories($categories);
        $course->categories()->attach($categories->pluck('id'));

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
        $course = Course::with(['speaker', 'preferences', 'categories'])->find($id);

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

        $course->update($input);

        if ($request->has('categories')) {
            $categories = $request->get('categories');
            $categories = $this->storeCategories($categories);
            $course->categories()->sync($categories->pluck('id'));
        }

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
        $course->categories()->detach();
        $course->delete();

        return response()->json([
            'title' => __('Success!'),
            'message' => __('Course was deleted successfully!'),
        ], 200);
    }
}
