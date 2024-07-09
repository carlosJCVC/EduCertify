<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\EducationalExperience;
use App\Traits\EducationalExperienceTrait;
use Illuminate\Http\Request;

class ExpertiseController extends Controller
{
    use EducationalExperienceTrait;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $experiences = EducationalExperience::all($columns = ['name']);
        $experiences = $experiences->pluck('name')->flatten()->unique();

        return response()->json([
            'message' => 'List of experiences was loaded successfully!',
            'data' => $experiences
        ], 200);
    }

    /**
     * Display a listing of the resource.
     */
    public function json()
    {
        $experiences = EducationalExperience::all($columns = ['name']);
        $experiences = $experiences->pluck('name');

        return response()->json([
            'message' => 'List of experiences was loaded successfully!',
            'data' => [...$experiences->toArray()]
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $input = $request->all();
        $experiencesArray = [$input];

        $this->storeExperiences($experiencesArray);

        return response()->json([
            'title' => __('Success!'),
            'message' => __('Experience was created successfully!'),
        ], 201);
    }
}
