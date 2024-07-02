<?php

namespace App\Http\Controllers\Admin;

use App\Exceptions\ParticipantAlreadyEnrolled;
use App\Http\Controllers\Controller;
use App\Models\Course;
use App\Models\Participant;
use App\Traits\DatatableTrait;
use Illuminate\Http\Request;
use Yajra\DataTables\Facades\DataTables;

class EnrollCourseController extends Controller
{
    use DatatableTrait;

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }
    /**
     * Display a listing of the resource.
     */
    public function json(string $id)
    {
        $courses = Course::all();
        $participant = Participant::find($id);
        $courses = $participant->courses;

        return DataTables::of($courses)
            // ->addColumn('name', fn ($record) => $record->name)
            ->addColumn('speaker_name', fn ($record) => $record->speaker->full_name)
            ->addColumn('list_categories', function($record) {
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
            ->addColumn('start_date', fn ($record) => $record->start_date)
            ->addColumn('end_date', fn ($record) => $record->end_date)
            ->addColumn('actions', function($record) {
                $buttons = '';
                $buttons .= "<a href='javascript:void(0)' class='btn-send-certificate mx-1' data-id='{$record->id}'><i class='ti ti-mail ti-xs'></i></a>";
                $buttons .= "<a href='javascript:void(0)' class='btn-unenroll-participant mx-1' data-id='{$record->id}' title='Unenroll'><i class='ti ti-trash ti-xs'></i></a>";

                return $buttons;
            })
            ->rawColumns(['actions', 'list_categories'])
            ->make(true);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, string $id)
    {
        $coursesIds = $request->get('courses_ids');

        $participant = Participant::find($id);

        $courses = $participant->courses()->whereIn('courses.id', $coursesIds)->get();

        if ($courses->count() > 0) {
            throw new ParticipantAlreadyEnrolled();
        }

        $participant->courses()->attach($coursesIds);

        return response()->json([
            'title' => __('Success!'),
            'message' => __('Courses was enrolled successfully!')
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id, string $courseid)
    {
        $participant = Participant::find($id);
        $participant->courses()->detach($courseid);

        return response()->json([
            'title' => __('Success!'),
            'message' => __('Course was unrolled successfully!')
        ], 200);
    }
}
