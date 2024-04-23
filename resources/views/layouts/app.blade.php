<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'EduCertify') }} - @yield('title')</title>

    <!-- Fonts -->
    {{-- <link rel="dns-prefetch" href="//fonts.bunny.net"> --}}
    <link href="https://fonts.bunny.net/css?family=Nunito" rel="stylesheet">

    {{-- <link href="http://localhost:2000/dist/css/tabler.min.css?1684106062" rel="stylesheet">
    <link href="http://localhost:2000/dist/css/tabler-flags.min.css?1684106062" rel="stylesheet">
    <link href="http://localhost:2000/dist/css/tabler-vendors.min.css?1684106062" rel="stylesheet">
    <link href="http://localhost:2000/dist/css/demo.min.css?1684106062" rel="stylesheet"> --}}

    <!-- Styles -->
    @vite(['resources/sass/app.scss', 'resources/sass/tabler.scss', 'resources/sass/vendor/fonts/tabler-icons.scss'])

    {{-- <link rel="preconnect" href="{{ env('APP_URL') }}">
    <link rel="stylesheet" href="{{ asset('assets/fonts/Inter/web/inter.css') }}"> --}}
    <link rel="preconnect" href="https://rsms.me/">
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css">

    <style>
        :root {
            --tblr-font-sans-serif: 'Inter Var', -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif;
        }

        body {
            font-feature-settings: "cv03", "cv04", "cv11";
        }
    </style>
</head>

<body>
    <div id="page">
        <!-- Sidebar -->
        @section('sidebar')
            @include('layouts._partials.sidebar')
        @show

        <!-- Navbar -->
        @include('layouts._partials.navbar')

        @yield('content')
    </div>

    <!-- Scripts -->
    @vite(['resources/js/app.js', 'resources/js/tabler.js'])
</body>

</html>
