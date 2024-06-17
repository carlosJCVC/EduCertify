<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserUniqueEmailRequest extends FormRequest
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
            'email' => ['required', 'string', 'unique:users'],
        ];

        if ($this->has('user_id')) {
            $userId = $this->get('user_id');

            $rules = [
                'email' => ['required', 'string', 'unique:users,email,' . $userId],
            ];
        }

        return $rules;
    }
}
