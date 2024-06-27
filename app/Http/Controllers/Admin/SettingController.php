<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\SettingsRequest;
use App\Models\Setting;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('admin.settings.index');
    }

    /**
     * Display the specified resource.
     */
    public function show()
    {
        $settings = Setting::first();

        return response()->json([
            'data' => empty($settings)? [] : $settings
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(SettingsRequest $request)
    {
        $settings = Setting::first();
        if (empty($settings)) {
            $settings = new Setting();
        }

        $settings->title = $request->get('title');
        $settings->speaker_name = $request->get('speaker_name');
        $settings->director_name = $request->get('director_name');
        $settings->background_color = $request->get('background_color');
        $settings->text_color = $request->get('text_color');

        if ($request->has('director_signature_data')) {
            $settings->director_signature_data_url = $request->get('director_signature_data_url');
            $settings->director_signature_data = $request->get('director_signature_data');
        }

        if ($request->has('speaker_signature_data')) {
            $settings->speaker_signature_data_url = $request->get('speaker_signature_data_url');
            $settings->speaker_signature_data = $request->get('speaker_signature_data');
        }

        $settings->save();

        if ($request->has('logo_image')) {
            $logoImage = $request->get('logo_image');

            $settings->updateLogoImage(image: $logoImage);
        }

        if ($request->has('background_image')) {
            $bgImage = $request->get('background_image');

            $settings->updateBackgroundImage(image: $bgImage, storagePath: 'background-images');
        }

        return response()->json([
            'title' => __('Success!'),
            'message' => __('Settings were updated successfully!'),
        ], 200);
    }
}
