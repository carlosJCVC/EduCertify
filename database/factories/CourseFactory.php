<?php

namespace Database\Factories;

use App\CoursesLevel;
use App\Models\Speaker;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Course>
 */
class CourseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->catchPhrase(),
            'speaker_id' => Speaker::all()->random()->id, // Speaker::factory(), Speaker::all()->random()->id
            'level' =>  fake()->randomElement(CoursesLevel::cases())->value,
            'start_date' => now(), // dateTime
            'end_date' => now(),
            'description' => fake()->paragraph(),
        ];
    }
}
