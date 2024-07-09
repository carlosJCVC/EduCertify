<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class EducationalExperience extends Model
{
    use HasFactory;
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'description',
    ];
    /**
     * Relation many to many of speaker with educational_experiences tables.
     */
    public function speakers(): BelongsToMany
    {
        return $this->belongsToMany(Speaker::class);
    }
}
