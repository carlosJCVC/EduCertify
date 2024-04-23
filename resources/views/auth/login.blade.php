@extends('layouts.auth')

@section('title', 'Sign In')

@section('content')
    <div class="text-center mb-4">
        <a href="." class="navbar-brand navbar-brand-autodark">
            <img src="{{ asset('assets/images/logos/logo.svg') }}" height="36" alt="Logo">
        </a>
    </div>

    <div class="card card-md">
        <div class="card-body">
            <h2 class="h2 text-center mb-4">@lang('Login to your account')</h2>

            <form action="{{ route('login') }}" method="POST" autocomplete="off" novalidate>
                @csrf

                <div class="mb-3">
                    <label class="form-label">@lang('Email address')</label>

                    <input
                        id="email"
                        type="email"
                        class="form-control @error('email') is-invalid @enderror"
                        name="email"
                        value="{{ old('email') }}"
                        placeholder="your@email.com"
                        autocomplete="off" required>

                    @error('email')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>

                <div class="mb-2">
                    <label class="form-label">
                        @lang('Password')

                        @if (Route::has('password.request'))
                        <span class="form-label-description">
                            <a href="{{ route('password.request') }}">@lang('I forgot password')</a>
                        </span>
                        @endif
                    </label>

                    <div class="input-group">
                        <input
                            id="password"
                            type="password"
                            class="form-control @error('password') is-invalid @enderror"
                            name="password"
                            placeholder="Your password"
                            autocomplete="current-password"
                            autocomplete="off" required>

                        <span class="input-group-text">
                            <a href="#" class="link-secondary" title="Show password" data-bs-toggle="tooltip">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24"
                                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                    <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                                </svg>
                            </a>
                        </span>

                        @error('password')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>

                </div>

                <div class="mb-2">
                    <label class="form-check">
                        <input type="checkbox" class="form-check-input" name="remember" {{ old('remember') ? 'checked' : '' }} />

                        <span class="form-check-label">@lang('Remember me on this device')</span>
                    </label>
                </div>

                <div class="form-footer">
                    <button type="submit" class="btn btn-primary w-100">@lang('Sign in')</button>
                </div>
            </form>
        </div>
    </div>

    <div class="text-center text-muted mt-3">
        @lang('Don\'t have account yet?') <a href="./sign-up.html" tabindex="-1">@lang('Sign up')</a>
    </div>
@endsection
