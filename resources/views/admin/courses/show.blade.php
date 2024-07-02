@extends('layouts.app')

@section('title')
    @lang('Course ID: :id', ['ID' => $course->id])
@endsection

@push('styles')
    @include('admin.courses.tabs.details.styles')
    @include('admin.courses.tabs.settings.styles')
@endpush

@section('content')
    <div class="page-wrapper">
        <!-- Page header -->
        <div class="page-header">
            <div class="container-xl">
                <div class="row g-2 align-items-center">
                    <div class="col">
                        <!-- Page pre-title -->
                        <h2 class="page-title">
                            @lang('Course :name', ['name' => $course->name])
                        </h2>
                    </div>

                    <div class="col-auto ms-auto">
                        <a href="javascript:void(0)" class="btn btn-md btn-outline-warning px-2" id="btn-send-certificates">
                            <i class="ti ti-mail-forward ti-xs ms-0 me-2"></i>@lang('Send Certificates')
                        </a>

                        <a href="javascript:void(0)" class="btn btn-md btn-outline-primary px-2"
                            id="btn-enroll-participant-course">
                            <i class="ti ti-plus ti-xs ms-0 me-2"></i>@lang('Enroll Participant Now')
                        </a>

                        <a href="javascript:void(0)" class="btn btn-md btn-outline-info px-2" id="btn-edit-course">
                            <i class="ti ti-pencil ti-xs ms-0 me-2"></i>@lang('Edit Course')
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Page body -->
        <div class="page-body">
            <div class="container-xl">
                <nav class="nav nav-tabs flex-column flex-sm-row" id="nav-tab" role="tablist">
                    <a href="javascript:void(0)" class="flex-sm-fill text-center nav-link active" id="nav-details-tab"
                        data-bs-toggle="tab" data-bs-target="#nav-details" role="tab" aria-controls="nav-details"
                        aria-selected="true">
                        <i class="ti ti-address-book ti-xs ms-0 me-2"></i> @lang('Course Details')
                    </a>

                    <a href="javascript:void(0)" class="flex-sm-fill text-sm-center nav-link" id="nav-participants-tab"
                        data-bs-toggle="tab" data-bs-target="#nav-participants" role="tab"
                        aria-controls="nav-participants" aria-selected="false">
                        <i class="ti ti-book ti-xs ms-0 me-2"></i> @lang('Participants')
                    </a>

                    <a href="javascript:void(0)" class="flex-sm-fill text-sm-center nav-link" id="nav-settings-tab"
                        data-bs-toggle="tab" data-bs-target="#nav-settings" role="tab" aria-controls="nav-settings"
                        aria-selected="false">
                        <i class="ti ti-certificate ti-xs ms-0 me-2"></i>@lang('Settings')
                    </a>
                </nav>

                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade active show" id="nav-details" role="tabpanel"
                        aria-labelledby="nav-details-tab">
                        @include('admin.courses.tabs.details.index')
                    </div>

                    <div class="tab-pane fade" id="nav-participants" role="tabpanel" aria-labelledby="nav-participants-tab">
                        @include('admin.courses.tabs.participants.index')
                    </div>

                    <div class="tab-pane fade" id="nav-settings" role="tabpanel" aria-labelledby="nav-settings-tab">
                        @include('admin.courses.tabs.settings.index')
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <x-_modals.modal :title="__('Modal Title')" id="enroll-participant-to-course-modal" class="modal-dialog modal-dialog-centered">
        <x-slot:header>
            <h5 class="modal-title">@lang('Enroll Participant')</h5>
        </x-slot>

        <form action="" id="enroll-participant-form">
            <div class="row">
                <div class="col-12 mb-3">
                    <div class="form-floating-custom">
                        <input type="text" class="form-control select-participant tagify-participants" name="participants"
                            id="floatingInputCourse">

                        <label for="floatingInputCourse">{{ __('Participants') }}</label>
                    </div>
                </div>
            </div>
        </form>

        <x-slot:footer>
            <button type="button" class="btn btn-primary btn-enroll-participant">@lang('Save Changes')</button>
        </x-slot>
    </x-_modals.modal>

    <!-- Modal -->
    <x-_modals.modal :title="__('Modal Title')" id="course-modal" class="modal-dialog">
        <x-slot:header>
            <h5 class="modal-title">@lang('Create New Course')</h5>
        </x-slot>

        @include('admin.courses.form')

        <x-slot:footer>
            <button type="button" class="btn btn-primary btn-save-course">@lang('Save Changes')</button>
        </x-slot>
    </x-_modals.modal>
@endsection

@push('scripts')
    <script src="{{ Vite::asset('resources/assets/vendor/libs/@form-validation/umd/bundle/popular.min.js') }}"></script>
    <script src="{{ Vite::asset('resources/assets/vendor/libs/@form-validation/umd/plugin-bootstrap5/index.min.js') }}">
    </script>
    <script src="{{ Vite::asset('resources/assets/vendor/libs/@form-validation/umd/plugin-auto-focus/index.min.js') }}">
    </script>
    <script src="{{ Vite::asset('resources/assets/vendor/libs/@form-validation/umd/validator-remote/index.min.js') }}">
    </script>

    @vite('resources/js/src/courses/show-course.js')
@endpush
