<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\SettingsRequest;
use App\Models\Course;
use App\Models\Participant;
use App\Notifications\SendCertificate;
use App\Traits\CertificateTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class CertificateController extends Controller
{
    use CertificateTrait;

    /**
     * Certificate preview
     */
    public function preview(SettingsRequest $request)
    {
        // dd($request->all());
        $link = $this->generatePreviewCertificate(course: null, request: $request);
        $filename = "certificate-preview.pdf";

        return Response::download($link, $filename);
    }

    /**
     * donwload certificate
     */
    public function download(Request $request, string $courseId)
    {
        // dd($request->all());
        $course = Course::find($courseId);
        $link = $this->generatePreviewCertificate(request: $request, course: $course);
        $filename = "certificate-preview.pdf";

        return Response::download($link, $filename);
    }

    /**
     * Send certificate by course id.
     */
    public function send(Request $request, string $id)
    {
        $courseid = $request->get('courseid');
        $course = Course::find($courseid);
        $participant = Participant::find($id);

        $link = $this->generateParticipantCertificate($participant, $course);

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

            $link = $this->generateParticipantCertificate($participant, $course);

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
            $link = $this->generateParticipantCertificate($participant, $course);

            $participant->notify(new SendCertificate(course: $course, link: $link));
        }

        return response()->json([
            'title' => __('Success!'),
            'message' => __('Certificates were sent successfully!'),
        ], 201);
    }
}
