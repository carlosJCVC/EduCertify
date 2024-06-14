<?php

namespace App\Traits;

use App\Models\Course;
use App\Models\Participant;
use Barryvdh\DomPDF\Facade\Pdf;

trait CertificateTrait
{
    public function generateCertificate(Participant $participant, Course $course): string
    {
        $data = [
            'name' => $participant->full_name,
            'course' => $course->name,
            'description' => $course->description,
            'date' => now(),
            'hours' => 7,
            'logo' => public_path('storage/images/logo1.svg'),
            'signature_i' => public_path('storage/images/signature-instructor.jpg'),
            'signature_d' => public_path('storage/images/signature-director.jpg'),
            'instructor' => $course->speaker,
            'director' => 'Yania Johnson'
        ];

        $pathname = "certificates/certificate-{$course->id}{$participant->id}.pdf";
        $pdf = PDF::loadView('admin.courses.certificate', $data);
        $pdf->setPaper('Letter', 'landscape');
        $pdf->save($pathname, 'public');

        $link = public_path("storage/{$pathname}");

        return $link;
    }
}
