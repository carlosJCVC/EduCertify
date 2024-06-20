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
            ->addColumn('birthdate', fn ($record) => $record->birthdate)
            ->addColumn('status', fn ($record) => "<div class='badge {$record->status->badgeColor()} text-white'>{$record->status->value}</div>")
            ->addColumn('actions', function ($record) {
                $buttons = '';
                $buttons .= "<a href='javascript:void(0)' class='btn-send-certificate mx-1' data-id='{$record->id}'><i class='ti ti-mail ti-xs'></i></a>";
                $buttons .= "<a href='javascript:void(0)' class='btn-unenroll-participant mx-1' data-id='{$record->id}' title='Unenroll Participant'><i class='ti ti-trash ti-xs'></i></a>";

                return $buttons;
            })
            ->rawColumns(['actions', 'categories'])
            ->make(true);
    }
}
