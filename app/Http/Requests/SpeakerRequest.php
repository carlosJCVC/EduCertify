<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SpeakerRequest extends FormRequest
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
        $rules = [
            'first_name' => ['required', 'string', 'max:64'],
            'last_name' => ['required', 'string', 'max:64'],
            'email' => ['required', 'string', 'unique:speakers'],
            'status' => ['required', 'string'],
            'phone_number' => ['nullable', 'string'],
            'linkedin_profile' => ['nullable', 'string', 'url:http,https'],
            'website' => ['nullable', 'string', 'url:http,https'],
            'expertise' => ['nullable', 'array'],
            'biography' => ['nullable', 'string'],
            'notes' => ['nullable', 'string'],
        ];

        if ($this->method() == 'PATCH') {
            $speakerId = $this->route('id');

            $rules = [
                'email' => ['required', 'string', 'unique:speakers,email,' . $speakerId],
            ];
        }

        return $rules;
    }
}
