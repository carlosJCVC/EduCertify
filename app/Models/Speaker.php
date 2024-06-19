<?php

namespace App\Models;

use App\Enums\SpeakerStatuses;
use App\HasProfilePhoto;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Speaker extends Model
{
    use HasFactory, HasProfilePhoto;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'status',
        'phone_number',
        'linkedin_profile',
        'website',
        'expertise',
        'biography',
        'notes',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array<int, string>
     */
    protected $appends = [
        'profile_photo_url',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'status' => SpeakerStatuses::class,
        'expertise' => 'json'
    ];

    /**
     * Get the URL to the user's profile photo.
     *
     * @return \Illuminate\Database\Eloquent\Casts\Attribute
     */
    public function fullName(): Attribute
    {
        return Attribute::get(function (): string {
            return $this->last_name . " " . $this->first_name;
        });
    }

   /**
     * Get the courses or webinars for the speaker.
     */
    public function courses(): HasMany
    {
        return $this->hasMany(Course::class);
    }
}
