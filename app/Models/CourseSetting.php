<?php

namespace App\Models;

use App\Traits\HasLogoAndBackgroundImage;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseSetting extends Model
{
    use HasFactory, HasLogoAndBackgroundImage;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'background_color',
        'text_color',
        'text_font',
        'speaker_signature_data_url',
        'speaker_signature_data',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'speaker_signature_data' => 'json',
        ];
    }

    /**
     * The accessors to append to the model's array form.
     *
     * @var array<int, string>
     */
    protected $appends = [
        'background_image_url',
    ];
}
