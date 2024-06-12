<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Course;

class CategoryController extends Controller
{
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
        $categories = Course::all($columns = ['categories']);
        $categories = $categories->pluck('categories')->flatten()->unique();

        return response()->json([
            'message' => 'List of categories was loaded successfully!',
            'data' => [...$categories->toArray()]
        ], 200);
    }
}
