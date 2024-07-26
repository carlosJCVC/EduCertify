<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Course;
use App\Models\Participant;
use App\Models\Speaker;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {

        $spekaersToday = Speaker::whereDate('created_at', now()->format('Y-m-d'))->get()->count();
        $spekaers = Speaker::all()->count();

        $coursesToday = Course::whereDate('created_at', now()->format('Y-m-d'))->get()->count();
        $courses = Course::all()->count();

        $participantsToday = Participant::whereDate('created_at', now()->format('Y-m-d'))->get()->count();
        $participants = Participant::all()->count();

        return view('admin.dashboard')->with(['dataSpeakers' => [$spekaersToday, $spekaers], 'dataCourses' => [$coursesToday, $courses], 'dataParticipants' => [$participantsToday, $participants]]);
    }
}
