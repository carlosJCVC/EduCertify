<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Course;
use App\Traits\CategoryTrait;

class CategoryController extends Controller
{
    use CategoryTrait;

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Course::all($columns = ['categories']);
        $categories = $categories->pluck('categories')->flatten()->unique();

        return response()->json([
            'message' => 'List of categories was loaded successfully!',
            'data' => $categories
        ], 200);
    }

    /**
     * Display a listing of the resource.
     */
    public function json()
    {
        $categories = Category::all($columns = ['name']);
        $categories = $categories->pluck('name');

        return response()->json([
            'message' => 'List of categories was loaded successfully!',
            'data' => [...$categories->toArray()]
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $input = $request->all();
        $categoriesArray = [$input];

        $this->storeCategories($categoriesArray);

        return response()->json([
            'title' => __('Success!'),
            'message' => __('Category was created successfully!'),
        ], 201);
    }
}
