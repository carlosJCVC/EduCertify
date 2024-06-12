@extends('layouts.app')

@section('title')
    @lang('Courses')
@endsection

@push('styles')

@endpush

@section('content')
    <div class="page-wrapper">
        <!-- Page header -->
        <div class="page-header d-print-none">
            <div class="container-xl">
                <div class="row g-2 align-items-center">
                    <div class="col">
                        <!-- Page pre-title -->
                        <h2 class="page-title">
                            @lang('Courses Dashboard')
                        </h2>
                    </div>

                    {{-- <div class="col-auto ms-auto">
                        <a href="javascript:void(0)" class="btn btn-md btn-primary px-2" id="btn-new-course">
                            <i class="ti ti-plus ti-xs ms-0 me-2"></i>@lang('Create New Course')
                        </a>
                    </div> --}}
                </div>
            </div>
        </div>

        <!-- Page body -->
        <div class="page-body">
            <div class="container-xl">
                <div class="card">
                    <div class="card-body">
                        <div id="table-default" class="table-responsive">
                            <table id="courses-datatable" class="table">
                                <thead>
                                    <tr>
                                        <th>@lang('name')</th>
                                        <th>@lang('speaker')</th>
                                        <th>@lang('category')</th>
                                        <th>@lang('level')</th>
                                        <th>@lang('start date')</th>
                                        <th>@lang('end date')</th>
                                        <th>@lang('Actions')</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <th>@lang('Name')</th>
                                    <th>@lang('Speaker')</th>
                                    <th>@lang('Category')</th>
                                    <th>@lang('Level')</th>
                                    <th>@lang('Start date')</th>
                                    <th>@lang('End date')</th>
                                    <th>@lang('Actions')</th>
                                </tfoot>
                                <tbody class="table-tbody">
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

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
    <script src="{{ Vite::asset('resources/assets/vendor/libs/@form-validation/umd/plugin-bootstrap5/index.min.js') }}"></script>
    <script src="{{ Vite::asset('resources/assets/vendor/libs/@form-validation/umd/plugin-auto-focus/index.min.js') }}"></script>
    <script src="{{ Vite::asset('resources/assets/vendor/libs/@form-validation/umd/validator-remote/index.min.js') }}"></script>
    <script src="{{ Vite::asset('resources/assets/vendor/libs/@form-validation/umd/plugin-start-end-date/index.min.js') }}"></script>


    @vite('resources/js/src/courses/list-courses.js')
@endpush
