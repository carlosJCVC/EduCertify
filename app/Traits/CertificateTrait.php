<?php

namespace App\Traits;

use App\Models\Course;
use App\Models\Participant;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;

trait CertificateTrait
{
    public function generatePreviewCertificate(Course $course, Request $request): string
    {
        $preferences = $course->preferences;

        $data = [
            'name' => 'John Doe',
            'course' => 'Advanced C. Techniques with John Doe',
            'description' => 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. A debitis atque blanditiis, ex qui architecto eius quasi!.',
            'date' => now(),
            'hours' => 8,
            'logo' => public_path('storage/images/logo1.svg'),
            'signature_i' => $preferences->signature_path ?? public_path('storage/images/signature-instructor.jpg'),
            'signature_d' => public_path('storage/images/signature-director.jpg'),
            'instructor' => $course->speaker,
            'director' => 'Jane Doe',
            // 'bg_image' => $request->has('bg_image') ? $request->get('bg_image') : null,
            'bg_image' => isset($preferences)? $preferences->background_image_url : null,
            'bg_color' => isset($preferences)? $preferences->background_color : '#fff',
            'text_color' => isset($preferences)? $preferences->text_color : '#000',
        ];
        // dd($data);

        $pathname = "certificates/certificate-{$course->id}-preview.pdf";
        $pdf = PDF::loadView('admin.courses.certificate', $data);
        $pdf->setPaper('Letter', 'landscape');
        $pdf->save($pathname, 'public');

        $link = public_path("storage/{$pathname}");

        return $link;
    }

    public function generateCertificate(Participant $participant, Course $course): string
    {
        $preferences = $course->preferences;

        $data = [
            'name' => $participant->full_name,
            'course' => $course->name,
            'description' => $course->description,
            'date' => now(),
            'hours' => 7,
            'logo' => public_path('storage/images/logo1.svg'),
            'signature_i' => $preferences->signature_path ?? public_path('storage/images/signature-instructor.jpg'),
            'signature_d' => public_path('storage/images/signature-director.jpg'),
            'instructor' => $course->speaker,
            'director' => 'Yania Johnson',
            'bg_image' => $preferences->background_image_url,
            'bg_color' => $preferences->background_color,
            'text_color' => $preferences->text_color,
        ];

        $pathname = "certificates/certificate-{$course->id}{$participant->id}.pdf";
        $pdf = PDF::loadView('admin.courses.certificate', $data);
        $pdf->setPaper('Letter', 'landscape');
        $pdf->save($pathname, 'public');

        $link = public_path("storage/{$pathname}");

        return $link;
    }
}
