<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Speaker;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function speakers(Request $request)
    {
        $query = $request->has('q')? $request->get('q') : '';

        $speakers = Speaker::get();
        if ($request->has('q')) {
            $speakers = Speaker::where('first_name', 'like', "{$query}%")->orWhere('last_name', 'like', "{$query}%")->get();
        }

        return response()->json([
            'message' => 'Speakers was loadeed successfully!',
            'data' => $speakers,
        ]);
    }
}
