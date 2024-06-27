<?php

namespace App\Models;

use App\Traits\HasLogoAndBackgroundImage;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    use HasFactory, HasLogoAndBackgroundImage;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'title',
        'speaker_name',
        'director_name',
        'background_color',
        'text_color',
        'text_font',
        'director_signature_data_url',
        'director_signature_data',
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
            'director_signature_data' => 'json',
        ];
    }

    /**
     * The accessors to append to the model's array form.
     *
     * @var array<int, string>
     */
    protected $appends = [
        'logo_image_url',
        'background_image_url',
    ];
}
