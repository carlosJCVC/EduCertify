@extends('layouts.app')

@section('title')
    @lang('Users')
@endsection

@push('styles')
{{-- <link href="https://cdn.datatables.net/buttons/3.0.2/css/buttons.bootstrap5.css" rel="stylesheet">
<link href="https://cdn.datatables.net/colreorder/2.0.2/css/colReorder.bootstrap5.css" rel="stylesheet"> --}}
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
                            @lang('Users Dashboard')
                        </h2>
                    </div>

                    <div class="col-auto ms-auto">
                        <a href="javascript:void(0)" class="btn btn-md btn-primary px-2" id="btn-new-user"><i class="ti ti-plus ti-xs ms-0 me-2"></i>@lang('Create New User')</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Page body -->
        <div class="page-body">
            <div class="container-xl">
                <div class="card">
                    <div class="card-body">
                        <div id="table-default" class="table-responsive">
                            <table id="users-datatable" class="table">
                                <thead>
                                    <tr>
                                        <th>@lang('Name')</th>
                                        <th>@lang('Email')</th>
                                        <th>@lang('Roles')</th>
                                        <th>@lang('Status')</th>
                                        <th>@lang('Created At')</th>
                                        <th>@lang('Actions')</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <th>@lang('Name')</th>
                                    <th>@lang('Email')</th>
                                    <th>@lang('Roles')</th>
                                    <th>@lang('Status')</th>
                                    <th>@lang('Created At')</th>
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
    <x-_modals.modal :title="__('Modal Title')" id="user-modal" class="modal-dialog">
        <x-slot:header>
            <h5 class="modal-title">@lang('Create New User')</h5>
        </x-slot>

        @include('admin.users.form')

        <x-slot:footer>
            <button type="button" class="btn btn-primary btn-save-user">@lang('Save Changes')</button>
        </x-slot>
    </x-_modals.modal>
@endsection

@push('scripts')
    <script src="{{ Vite::asset('resources/assets/vendor/libs/@form-validation/umd/bundle/popular.min.js') }}"></script>
    <script src="{{ Vite::asset('resources/assets/vendor/libs/@form-validation/umd/plugin-bootstrap5/index.min.js') }}"></script>
    <script src="{{ Vite::asset('resources/assets/vendor/libs/@form-validation/umd/plugin-auto-focus/index.min.js') }}"></script>
    <script src="{{ Vite::asset('resources/assets/vendor/libs/@form-validation/umd/validator-remote/index.min.js') }}"></script>

    @vite('resources/js/src/users/list-users.js')
@endpush
