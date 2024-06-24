<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Course;
use App\Models\CourseSetting;
use Illuminate\Http\Request;

class CoursePreferenceController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $course = Course::find($id);

        if (is_null($course->setting_id)) {
            $preferences = new CourseSetting();
        } else {
            $preferences = CourseSetting::find($course->setting_id);
        }

        $preferences->course_id = $course->id;
        $preferences->background_color = $request->get('background_color');
        $preferences->text_color = $request->get('text_color');
        $preferences->signature_path = $request->get('signature');

        $preferences->save();
        $course->update(['setting_id' => $preferences->id]);

        if ($request->has('bgimage')) {
            $bgImage = $request->file('bgimage');

            $preferences->updateBackgroundImage($bgImage);
        }

        return response()->json([
            'title' => __('Success!'),
            'message' => __('Course Preferences was updated successfully!'),
        ], 200);
    }
}
