<?php

namespace App\Traits;

use App\Models\Category;

trait CategoryTrait
{
    public function storeCategories(array $categories): bool
    {
        foreach ($categories as $name) {
            Category::updateOrCreate(['name' => $name], ['name' => $name, 'description' => null]);
        }

        return true;
    }
}
