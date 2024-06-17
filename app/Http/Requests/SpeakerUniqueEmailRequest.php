<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SpeakerUniqueEmailRequest extends FormRequest
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
            'email' => ['required', 'string', 'unique:speakers'],
        ];

        if ($this->has('speaker_id')) {
            $speakerId = $this->get('speaker_id');

            $rules = [
                'email' => ['required', 'string', 'unique:speakers,email,' . $speakerId],
            ];
        }

        return $rules;
    }
}
