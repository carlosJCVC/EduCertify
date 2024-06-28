<?php

namespace App\Traits;

use App\Models\Course;
use App\Models\Participant;
use App\Models\Setting;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;
use Sabberworm\CSS\Settings;

trait CertificateTrait
{
    public function generatePreviewCertificate(Request $request, ?Course $course): string
    {
        $data = $this->getPreviewCertificateData(request: $request, course: $course);

        $pathname = "certificates/certificate-preview.pdf";
        if (! is_null($course)) {
            $pathname = "certificates/certificate-{$course->id}-preview.pdf";
        }

        $pdf = PDF::loadView('admin.courses.certificate', $data);
        $pdf->setPaper('Letter', 'landscape');
        $pdf->save($pathname, 'public');

        $link = public_path("storage/{$pathname}");

        return $link;
    }

    /**
     * Generate certificate for participant 
     */
    public function generateParticipantCertificate(Participant $participant, Course $course): string
    {
        $data = $this->getCertificateData($participant, $course);
        $pathname = "certificates/certificate-{$course->id}{$participant->id}.pdf";
        $pdf = PDF::loadView('admin.courses.certificate', $data);
        $pdf->setPaper('Letter', 'landscape');
        $pdf->save($pathname, 'public');
        $link = public_path("storage/{$pathname}");

        return $link;
    }

    /**
     * Gnerate data to build certificate
     */
    public function getCertificateData(Participant $participant, Course $course): array
    {
        $preferences = $course->preferences;
        $setting = Setting::first();

        $speakerSignature = $preferences->speaker_signature_data_url ?? $setting->speaker_signature_data_url ?? public_path('storage/images/signature-instructor.jpg');
        $directorSignature = $preferences->director_signature_data_url ?? $setting->director_signature_data_url ?? public_path('storage/images/signature-instructor.jpg');
        $backgroundImage = $preferences->background_image_url ?? $setting->background_image_url ?? '';
        $backgroundColor = $preferences->background_color ?? $setting->background_color ?? '#fff';
        $textColor = $preferences->text_color ?? $setting->text_color ?? '#000';

        $data = [
            'title' => $setting->title ?? 'Institute of Child Psychology',
            'participant_name' => $participant->full_name,
            'course_name' => $course->name,
            'course_description' => $course->description,
            'date' => now(), // todo
            'hours' => 7, // todo
            'logo' => $setting->logo_image_url ?? public_path('storage/images/logo1.svg'),
            'speaker_signature' => $speakerSignature,
            'director_signature' => $directorSignature,
            'speaker_name' => $course->speaker->full_name,
            'director_name' => 'Yania Johnson', // todo
            'background_image' => $backgroundImage,
            'background_color' => $backgroundColor,
            'text_color' => $textColor,
        ];

        return $data;
    }

    /**
     * Gnerate data to build certificate
     */
    public function getPreviewCertificateData(Request $request, ?Course $course = null): array
    {
        // $preferences = $course->preferences;
        $setting = Setting::first();

        $speakerSignature = $request->get('speaker_signature_url') ?? $course->preferences->speaker_signature_data_url ?? $setting->speaker_signature_data_url ?? public_path('storage/images/signature-instructor.jpg');
        $directorSignature = $request->get('director_signature_url') ?? $course->preferences->director_signature_data_url ?? $setting->director_signature_data_url ?? public_path('storage/images/signature-instructor.jpg');
        $backgroundColor = $request->get('background_color') ?? $course->preferences->background_color ?? $setting->background_color ?? '#fff';
        $textColor = $request->get('text_color') ?? $course->preferences->text_color ?? $setting->text_color ?? '#000';
        $speakerName = $request->get('speaker_name') ?? $course->speaker->full_name ?? $setting->speaker_name ?? 'Jane Doe';
        $directorName = $request->get('director_name') ?? $setting->director_name ?? 'Jane Doe';
        
        $backgroundImage = $course->preferences->background_image_url ?? $setting->background_image_url ?? '';
        $logo = $setting->logo_image_url ?? public_path('storage/images/logo1.svg');

        $data = [
            'title' => $setting->title ?? 'Institute of Child Psychology',
            'participant_name' => 'John Doe',
            'course_name' => !is_null($course) ? $course->name : 'Advanced C. Techniques with John Doe',
            'course_description' => !is_null($course) ? $course->description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. A debitis atque blanditiis, ex qui architecto eius quasi!.',
            'date' => now(), // todo
            'hours' => 7, // todo
            'logo' => $logo,
            'speaker_signature' => $speakerSignature,
            'director_signature' => $directorSignature,
            'speaker_name' => $speakerName,
            'director_name' => $directorName,
            'background_image' => $backgroundImage,
            'background_color' => $backgroundColor,
            'text_color' => $textColor,
        ];

        return $data;
    }
}
