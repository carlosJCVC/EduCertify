<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Speaker;

class ExpertiseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $experties = Speaker::all($columns = ['expertise']);
        $experties = $experties->pluck('expertise')->flatten()->unique();

        return response()->json([
            'message' => 'List of experties was loaded successfully!',
            'data' => $experties
        ], 200);
    }
/**
     * Display a listing of the resource.
     */
    public function json()
    {
        $experties = Speaker::all($columns = ['expertise']);
        $experties = $experties->pluck('expertise')->flatten()->unique();
        $experties = $experties->filter(fn($item) => !is_null($item));

        return response()->json([
            'message' => 'List of experties was loaded successfully!',
            'data' => [...$experties->toArray()]
        ], 200);
    }
}
