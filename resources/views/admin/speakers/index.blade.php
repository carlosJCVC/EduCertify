@extends('layouts.app')

@section('title')
    @lang('Speakers')
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
                            @lang('Speakers Dashboard')
                        </h2>
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
                            <table id="speakers-datatable" class="table">
                                <thead>
                                    <tr>
                                        <th>@lang('Name')</th>
                                        <th>@lang('Email')</th>
                                        <th>@lang('Status')</th>
                                        <th>@lang('Expertise')</th>
                                        <th>@lang('Created At')</th>
                                        <th>@lang('Actions')</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <th>@lang('Name')</th>
                                    <th>@lang('Email')</th>
                                    <th>@lang('Status')</th>
                                    <th>@lang('Expertise')</th>
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
    <x-_modals.modal :title="__('Speaker Modal')" id="speaker-modal" class="modal-dialog modal-dialog-centered modal-lg">
        <x-slot:header>
            <h5 class="modal-title">@lang('Create New Speaker')</h5>
        </x-slot>

        @include('admin.speakers.form')

        <x-slot:footer>
            <button type="button" class="btn btn-primary btn-save-speaker">@lang('Save Speaker')</button>
        </x-slot>
    </x-_modals.modal>
@endsection

@push('scripts')
    <script src="{{ Vite::asset('resources/assets/vendor/libs/@form-validation/umd/bundle/popular.min.js') }}"></script>
    <script src="{{ Vite::asset('resources/assets/vendor/libs/@form-validation/umd/plugin-bootstrap5/index.min.js') }}"></script>
    <script src="{{ Vite::asset('resources/assets/vendor/libs/@form-validation/umd/plugin-auto-focus/index.min.js') }}"></script>
    <script src="{{ Vite::asset('resources/assets/vendor/libs/@form-validation/umd/validator-remote/index.min.js') }}"></script>

    @vite('resources/js/src/speakers/list-speakers.js')
@endpush