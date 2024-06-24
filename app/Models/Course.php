<?php

namespace App\Models;

use App\CoursesLevel;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Course extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'speaker_id',
        'setting_id',
        'categories',
        'level',
        'start_date',
        'end_date',
        'description',
    ];


    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'level' => CoursesLevel::class,
        'categories' => 'json'
    ];

    /**
     * Relation many to many of courses with couse_participant tables.
     */
    public function participants(): BelongsToMany
    {
        return $this->belongsToMany(Participant::class)->withTimestamps();
    }

    /**
     * Get the speaker that owns the course.
     */
    public function speaker(): BelongsTo
    {
        return $this->belongsTo(Speaker::class);
    }

    /**
     * Get the settings associated with the course.
     */
    public function preferences(): HasOne
    {
        return $this->hasOne(CourseSetting::class);
    }
}
