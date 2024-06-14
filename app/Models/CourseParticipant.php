<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class CourseParticipant extends Pivot
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'course_id',
        'participant_id',
        'created_at',
        'updated_at'
    ];

    /**
     * Relation many to many of couse_participant with course tables.
     */
    public function courses(): BelongsToMany
    {
        return $this->belongsToMany(Course::class);
    }
    /**
     * Relation many to many of couse_participant with participant tables.
     */
    public function participants(): BelongsToMany
    {
        return $this->belongsToMany(Participant::class);
    }
}
