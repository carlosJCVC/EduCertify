<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Course;
use Illuminate\Http\Request;
use Yajra\DataTables\Facades\DataTables;

class EnrollParticipantController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function json(string $id)
    {
        $course = Course::find($id);
        $participants = $course->participants;

        return DataTables::of($participants)
            ->addColumn('name', fn ($record) => $record->full_name)
            ->addColumn('enrolled_at', fn ($record) => $record->pivot->created_at->format('d M, Y'))
            ->addColumn('status', fn ($record) => "<div class='badge {$record->status->badgeColor()} text-white'>{$record->status->value}</div>")
            ->addColumn('actions', function ($record) {
                $buttons = '';
                $buttons .= "<a href='javascript:void(0)' class='btn-send-certificate mx-1' data-id='{$record->id}'><i class='ti ti-mail ti-xs'></i></a>";
                $buttons .= "<a href='javascript:void(0)' class='btn-unenroll-participant mx-1' data-id='{$record->id}' title='Unenroll Participant'><i class='ti ti-trash ti-xs'></i></a>";

                return $buttons;
            })
            ->rawColumns(['actions', 'status'])
            ->make(true);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, string $id)
    {
        $participantsIds = $request->get('participants_ids');
        $course = Course::find($id);
        
        $participants = $course->participants()->whereIn('participants.id', $participantsIds)->get();

        
        if ($participants->count() > 0) {
            // throw new ParticipantAlreadyEnrolled();
        }
        
        $course->participants()->attach($participantsIds);

        return response()->json([
            'title' => __('Success!'),
            'message' => __('Courses was enrolled successfully!')
        ], 200);
    }

     /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id, string $participantid)
    {
        $course = Course::find($id);
        $course->participants()->detach($participantid);

        return response()->json([
            'title' => __('Success!'),
            'message' => __('Participant was unrolled successfully!')
        ], 200);
    }
}
