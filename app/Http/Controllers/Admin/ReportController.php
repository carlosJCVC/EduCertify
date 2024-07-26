<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Course;
use App\Models\CourseCategory;
use App\Models\User;
use App\UserStatuses;
use Illuminate\Support\Arr;

class ReportController extends Controller
{
    /**
     * Display a listing user status.
     */
    public function getUserStatus()
    {
        $users = User::all();

        $data = [
            $users->where('status', UserStatuses::ACTIVE)->count(),
            $users->where('status', UserStatuses::INACTIVE)->count(),
        ];

        return response()->json([
            'labels' => ["Active Users", "Inactive Users"],
            'datasets' => [
                [
                    'label' => "Users",
                    'data' => $data,
                    'backgroundColor' => [
                        $this->generateRandomColor(0.6),
                        $this->generateRandomColor(0.6),
                        $this->generateRandomColor(0.6),
                        $this->generateRandomColor(0.6),
                        $this->generateRandomColor(0.6),
                        $this->generateRandomColor(0.6),
                    ],
                ]
            ],
        ]);
    }

    /**
     * Display a listing course by catories.
     */
    public function getCoursesCategory()
    {
        $categories = Category::withCount('courses')->get($columns = ['id', 'name']);

        return response()->json([
            'labels' => $categories->pluck('name'),
            'datasets' => [
                [
                    'label' => "Courses",
                    'data' => $categories->pluck('courses_count'),
                    'backgroundColor' => [
                        $this->generateRandomColor(0.6),
                        $this->generateRandomColor(0.6),
                        $this->generateRandomColor(0.6),
                        $this->generateRandomColor(0.6),
                        $this->generateRandomColor(0.6),
                        $this->generateRandomColor(0.6),
                    ],
                ]
            ],
        ]);
    }

    /**
     * Function to generate rgb random color
     */
    public function generateRandomColor($opacity): string
    {
        $red = rand(0, 255);
        $green = rand(0, 255);
        $blue = rand(0, 255);

        if ($opacity) {
            return "rgba($red, $green, $blue, $opacity)";
        }

        return "rgb($red, $green, $blue)";
    }
}
