<?php

namespace App\Models;

use App\Traits\HasBackgroundImageAndSignature;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseSetting extends Model
{
    use HasFactory, HasBackgroundImageAndSignature;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'background_color',
        'text_color',
        'text_font',
        'signature_path',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array<int, string>
     */
    protected $appends = [
        'background_image_url',
        'signature_data',
    ];
}
