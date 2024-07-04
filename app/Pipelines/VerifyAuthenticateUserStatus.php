<?php

namespace App\Pipelines;

use App\Models\User;
use App\UserStatuses;
use Illuminate\Auth\Events\Failed;
use Illuminate\Contracts\Auth\StatefulGuard;
use Illuminate\Validation\ValidationException;
use Laravel\Fortify\Fortify;
use Laravel\Fortify\LoginRateLimiter;

class VerifyAuthenticateUserStatus
{
    /**
     * Create a new controller instance.
     *
     * @param  \Illuminate\Contracts\Auth\StatefulGuard  $guard
     * @return void
     */
    public function __construct()
    {
        // TODO realizar repositorios
    }

    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  callable  $next
     * @return mixed
     */
    public function handle($request, $next)
    {
        $credentials = $request->only(Fortify::username());

        $user = User::where($credentials)->first();
        if ($user->status == UserStatuses::ACTIVE) {
            return $next($request);
        }

        $this->throwFailedAuthenticationException($request);
    }

    /**
     * Throw a failed authentication validation exception.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return void
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    protected function throwFailedAuthenticationException($request)
    {
        throw ValidationException::withMessages([
            Fortify::username() => [trans('auth.failed')],
        ]);
    }
}
