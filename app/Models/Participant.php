<?php

namespace App\Models;

use App\HasProfilePhoto;
use App\ParticipantStatuses;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Notifications\Notifiable;

class Participant extends Model
{
    use HasFactory, Notifiable, HasProfilePhoto;


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'birthdate',
        'status',
        'created_at',
        'updated_at'
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
        'status' => ParticipantStatuses::class,
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
     * Relation many to many of participant with couse_participant tables.
     */
    public function courses(): BelongsToMany
    {
        // return $this->belongsToMany(Course::class)->withTimestamps();
        return $this->belongsToMany(Course::class)->using(CourseParticipant::class)->withTimestamps();
    }
}
