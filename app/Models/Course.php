<?php

namespace App\Models;

use App\CoursesLevel;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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

}
