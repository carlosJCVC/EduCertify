@extends('layouts.app')

@section('title')
    @lang('Participant ID: :id', ['ID' => $participant->id])
@endsection

@push('styles')
    @include('admin.participants.tabs.details.styles')
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
                            @lang('Participant :name', ['name' => $participant->full_name])
                        </h2>
                    </div>

                    <div class="col-auto ms-auto">
                        @if (count($courseEnroll) > 0)
                            <a href="javascript:void(0)" class="btn btn-md btn-outline-warning px-2" id="btn-send-certificates">
                                <i class="ti ti-mail-forward ti-xs ms-0 me-2"></i>@lang('Send Certificates')
                            </a>
                        @endif

                        <a href="javascript:void(0)" class="btn btn-md btn-outline-primary px-2"
                            id="btn-enroll-participant">
                            <i class="ti ti-plus ti-xs ms-0 me-2"></i>@lang('Enroll Course Now')
                        </a>

                        <a href="javascript:void(0)" class="btn btn-md btn-outline-info px-2" id="btn-edit-participant">
                            <i class="ti ti-pencil ti-xs ms-0 me-2"></i>@lang('Edit Participant')
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
                        <i class="ti ti-address-book ti-xs ms-0 me-2"></i> @lang('Participant Details')
                    </a>

                    <a href="javascript:void(0)" class="flex-sm-fill text-sm-center nav-link" id="nav-webinars-tab"
                        data-bs-toggle="tab" data-bs-target="#nav-webinars" role="tab" aria-controls="nav-webinars"
                        aria-selected="false">
                        <i class="ti ti-book ti-xs ms-0 me-2"></i> @lang('Webinars')
                    </a>

                    <a href="javascript:void(0)" class="flex-sm-fill text-sm-center nav-link" id="nav-certificates-tab"
                        data-bs-toggle="tab" data-bs-target="#nav-certificates" role="tab"
                        aria-controls="nav-certificates" aria-selected="false">
                        <i class="ti ti-certificate ti-xs ms-0 me-2"></i>@lang('Certificates')
                    </a>
                </nav>

                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-details" role="tabpanel"
                        aria-labelledby="nav-details-tab">
                        @include('admin.participants.tabs.details.index')
                    </div>

                    <div class="tab-pane fade" id="nav-webinars" role="tabpanel" aria-labelledby="nav-webinars-tab">
                        @include('admin.participants.tabs.courses.index')
                    </div>

                    <div class="tab-pane fade" id="nav-certificates" role="tabpanel" aria-labelledby="nav-certificates-tab">
                        Certificates
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <x-_modals.modal :title="__('Modal Title')" id="enroll-participant-modal" class="modal-dialog">
        <x-slot:header>
            <h5 class="modal-title">@lang('Enroll Participant')</h5>
        </x-slot>

        <form action="" id="enroll-course-form">
            <div class="row">
                <div class="col-12 mb-3">
                    <div class="form-floating-custom">
                        <input type="text" class="form-control select-course tagify-courses" name="courses"
                            id="floatingInputCourse">

                        <label for="floatingInputCourse">{{ __('Courses') }}</label>
                    </div>
                </div>
            </div>

        </form>
        <x-slot:footer>
            <button type="button" class="btn btn-primary btn-enroll-course">@lang('Save Changes')</button>
        </x-slot>
    </x-_modals.modal>

    <!-- Modal edit-->
    <x-_modals.modal :title="__('Modal Title')" id="participant-modal" class="modal-dialog">
        <x-slot:header>
            <h5 class="modal-title">@lang('Create New Participant')</h5>
        </x-slot>

        @include('admin.participants.form')

        <x-slot:footer>
            <button type="button" class="btn btn-primary btn-save-participant">@lang('Save Changes')</button>
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

    @vite('resources/js/src/participants/show-participant.js')
@endpush
