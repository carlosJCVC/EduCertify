<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>@lang('Sign in')</title>

    @vite(['resources/sass/tabler.scss'])
    
    <link rel="preconnect" href="{{ env('APP_URL') }}">
    <link rel="stylesheet" href="{{ asset('assets/fonts/Inter/web/inter.css') }}">

    <style>
        :root {
            --tblr-font-sans-serif: 'Inter Var', -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif;
        }

        body {
            font-feature-settings: "cv03", "cv04", "cv11";
        }
    </style>
</head>

<body class="d-flex flex-column">
    <div class="page page-center">
        <div class="container container-tight py-4">

            @yield('content')

        </div>
    </div>

    @vite(['resources/js/tabler.js'])
</body>

</html>
