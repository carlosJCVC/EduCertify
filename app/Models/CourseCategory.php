<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class CourseCategory extends Model
{
    use HasFactory;
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'course_id',
        'category_id',
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
    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class);
    }
}
