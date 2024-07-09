<?php

namespace App\Traits;

use App\Models\EducationalExperience;

use Illuminate\Support\Collection;

trait EducationalExperienceTrait
{
    public function storeExperiences(array $experiencesArray): Collection
    {
        $experiences = collect([]);
        foreach ($experiencesArray as $name) {
            $experience = EducationalExperience::updateOrCreate(['name' => $name], ['name' => $name, 'description' => null]);
            $experiences->push($experience);
        }

        return $experiences;
    }
}
