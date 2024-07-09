@extends('layouts.app')

@section('title')
    @lang('Home')
@endsection

@section('content')
    <div class="page-wrapper">
        <!-- Page header -->
        <div class="page-header d-print-none">
            <div class="container-xl">
                <div class="row g-2 align-items-center">
                    <div class="col">
                        <!-- Page pre-title -->
                        <div class="page-pretitle">
                            @lang('Overview')
                        </div>
                        <h2 class="page-title">
                            @lang('Dashboard')
                        </h2>
                    </div>
                </div>
            </div>
        </div>

        <!-- Page body -->
        <div class="page-body">
            <div class="container-xl">
                @include('admin.dashboard.index')
            </div>
        </div>
    </div>
@endsection

@push('scripts')
    @vite('resources/js/src/dashboard/dashboard-app.js')
@endpush
