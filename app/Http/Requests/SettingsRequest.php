<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SettingsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => ['string'],
            'speaker_name' => ['required', 'string'],
            'director_name' => ['required', 'string'],
            'logo_image' => ['nullable', 'image'],
            'background_image' => ['nullable', 'image'],
            'background_color' => ['nullable', 'string'],
            'text_color' => ['nullable', 'string'],
            'director_signature_data' => ['nullable', 'array'],
            'director_signature_data_url' => ['nullable', 'string'],
            'speaker_signature_data' => ['nullable', 'array'],
            'speaker_signature_data_url' => ['nullable', 'string'],
        ];
    }

     
    /**
     * Prepare the data for validation.
     */
    protected function prepareForValidation(): void
    {
        $inputs = [];

        if ($this->hasFile('logoImage.file')) {
            $inputs['logo_image'] = $this->file('logoImage.file');
        }

        if ($this->hasFile('backgroundImage.file')) {
            $inputs['background_image'] = $this->file('backgroundImage.file');
        }

        if ($this->has('backgroundColor')) {
            $inputs['background_color'] = $this->get('backgroundColor');
        }

        if ($this->has('speakerName')) {
            $inputs['speaker_name'] = $this->get('speakerName');
        }

        if ($this->has('directorName')) {
            $inputs['director_name'] = $this->get('directorName');
        }

        if ($this->has('textColor')) {
            $inputs['text_color'] = $this->get('textColor');
        }

        if ($this->has('directorSignature')) {
            $inputs['director_signature_data'] = $this->input('directorSignature.data');
            $inputs['director_signature_data_url'] = $this->input('directorSignature.url');
        }

        if ($this->has('speakerSignature')) {
            $inputs['speaker_signature_data'] = $this->input('speakerSignature.data');
            $inputs['speaker_signature_data_url'] = $this->input('speakerSignature.url');
        }

        $this->merge($inputs);
    }
}
