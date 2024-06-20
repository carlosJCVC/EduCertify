<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Course;
use App\Models\Participant;
use App\Notifications\SendCertificate;
use App\Traits\CertificateTrait;
use Illuminate\Http\Request;

class CertificateController extends Controller
{
    use CertificateTrait;

    /**
     * Send certificate by course id.
     */
    public function send(Request $request, string $id)
    {
        $courseid = $request->get('courseid');
        $course = Course::find($courseid);
        $participant = Participant::find($id);

        $link = $this->generateCertificate($participant, $course);

        $participant->notify(new SendCertificate(course: $course, link: $link));

        return response()->json([
            'title' => __('Success!'),
            'message' => __('Course was created successfully!'),
        ], 201);
    }

    /**
     * Send certificate by course id.
     */
    public function sendAll(string $id)
    {
        $participant = Participant::find($id);
        $courses = $participant->courses;


        $links = [];
        foreach ($courses as $course) {

            $link = $this->generateCertificate($participant, $course);

            array_push($links, $link);
        }

        $participant->notify(new SendCertificate(course: null, link: $links));

        return response()->json([
            'title' => __('Success!'),
            'message' => __('Course was created successfully!'),
        ], 201);
    }

    /**
     * Send certificate by course id.
     */
    public function sendCertificateToAllParticipant(string $id)
    {
        $course = Course::find($id);
        $participants = $course->participants;

        foreach ($participants as $participant) {
            $link = $this->generateCertificate($participant, $course);

            $participant->notify(new SendCertificate(course: $course, link: $link));
        }

        return response()->json([
            'title' => __('Success!'),
            'message' => __('Certificates were sent successfully!'),
        ], 201);
    }
}
