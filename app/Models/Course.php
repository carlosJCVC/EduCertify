<?php

namespace App\Models;

use App\CoursesLevel;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

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
        'speaker',
        'categories',
        'level',
        'start_date',
        'end_date',
        'description',
        'created_at',
        'updated_at'
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


}
