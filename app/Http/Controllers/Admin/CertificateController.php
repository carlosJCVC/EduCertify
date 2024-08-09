<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\SettingsRequest;
use App\Models\Certificate;
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

    /**
     * Store a new send certificate.
     */
    public function store(Request $request)
    {
        $input = $request->all();
        
        if($request->has('participant_id') &&  $request->has('course_id')){
            $course = Course::find($request->course_id);
            $participant = Participant::find($request->participant_id);
            $exist = $this->checkCertificateExists($participant->id, $course->id);
            $link = $this->generateParticipantCertificate($participant, $course);

            if(!$exist){
                $input['file_path'] = $link;
                $send_certificate = Certificate::create($input);
            }
        }

        if($request->has('participant_id') && !$request->has('course_id')){
               
            $participant = Participant::find($input['participant_id']);
            $courses = $participant->courses;
            foreach ($courses as $course) {
                $link = $this->generateParticipantCertificate($participant, $course);
                $exist = $this->checkCertificateExists($participant->id, $course->id);
                if(!$exist){
                    $input['file_path'] = $link;
                    $input['course_id'] = $course->id;
                    $send_certificate = Certificate::create($input);
                }
            }
        }

        if(!$request->has('participant_id') && $request->has('course_id')){

            $course = Course::find($input['course_id']);
            $participants = $course->participants;
            foreach ($participants as $participant) {
                $link = $this->generateParticipantCertificate($participant, $course);
                $exist = $this->checkCertificateExists($participant->id, $course->id);
                if(!$exist){
                    $input['file_path'] = $link;
                    $input['participant_id'] = $participant->id;
                    $send_certificate = Certificate::create($input);
                }
            }
        }


        return response()->json([
            'title' => __('Success!'),
            'message' => __('certificate was register successfully!'),
        ], 201);
    }

    public function checkCertificateExists($participant_id, $course_id){

        $exist = Certificate::where('course_id', $course_id)
                            ->where('participant_id', $participant_id)
                            ->exists();
        if ($exist) {
            return true;
        }
        return false;
    }
}
