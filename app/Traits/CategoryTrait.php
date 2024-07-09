<?php

namespace App\Traits;

use App\Models\Category;
use Illuminate\Support\Collection;

trait CategoryTrait
{
    /**
     * store or update category
     */
    public function storeCategories(array $categoriesArray): Collection
    {
        $categories = collect([]);
        foreach ($categoriesArray as $name) {
            $category = Category::updateOrCreate(['name' => $name], ['name' => $name, 'description' => null]);
            $categories->push($category);
        }

        return $categories;
    }

    /**
     * Function to generate gradient
     */
    public function getBackgroundGradient(): string
    {
        $color1 = $this->generateRandomColor();
        $color2 = $this->generateRandomColor();
        $angulo = rand(0, 360);

        $gradient = "linear-gradient({$angulo}deg, {$color1}, {$color2})";

        return $gradient;
    }

    /**
     * Function to generate a random color 
     */
    public function generateRandomColor(): string
    {
        $colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

        $color = '#';
        for ($i = 0; $i < 6; $i++) {
            $color .= $colors[array_rand($colors)];
        }

        return $color;
    }
}
