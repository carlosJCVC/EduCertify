@extends('layouts.app')

@section('title')
    @lang('Settings')
@endsection

@push('styles')
    <style>
        .signature-pad,
        .director-signature-pad {
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
        }

        .signature-speaker-wrapper,
        .signature-director-wrapper {
            padding: 0;
            margin: 0;
            border: 1px solid #dddada;
            height: 100%;
        }

        .signature-speaker-line,
        .signature-director-line {
            border: 1px solid #000;
        }
    </style>
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
                            @lang('Settings Dashboard')
                        </h2>
                    </div>
                </div>
            </div>
        </div>

        <!-- Page body -->
        <div class="page-body">
            <div class="container-xl">

                <div class="card user-info-card mt-2">
                    <div class="card-header bg-dark text-white">
                        @lang('Certificate Preferences')
                    </div>

                    <div class="card-body">
                        <form id="settings-form">
                            <div class="row mt-2">
                                <div class="col-md-12 mb-4">
                                    <div class="form-floating-custom">
                                        <input type="text" name="title" id="floatingInputTitle" class="form-control" placeholder="Institution name">
                            
                                        <label for="floatingInputTitle">{{ __('Institution name') }}</label>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <input type="file" name="logoImage" id="logo-image" data-height="200"
                                        data-allowed-file-extensions="jpg jpeg png svg" class="form-control dropify"
                                        placeholder="Logo Image">
                                </div>

                                <div class="col-md-6">
                                    <input type="file" name="backgroundImage" id="background-image" data-height="200"
                                        data-allowed-file-extensions="jpg jpeg png svg" class="form-control dropify"
                                        placeholder="Background Image">
                                </div>

                                <div class="col-md-6 mt-4">
                                    <div class="form-group">
                                        <label for="floatingInputName">{{ __('Certificate Background Color') }}</label>

                                        <div style="width: 100%" id="bg-color-picker"></div>
                                    </div>
                                </div>

                                <div class="col-md-6 mt-4">
                                    <div class="form-group">
                                        <label for="floatingInputName">{{ __('Certificate Text Color') }}</label>

                                        <div id="text-color-picker"></div>
                                    </div>
                                </div>

                                <div class="col-md-6 mt-4">
                                    <div class="signature-speaker">
                                        <div class="signature-speaker-body">
                                            <div class="row">
                                                <div class="col-md-1">
                                                    <a href="javascript:void(0)" class="btn btn-info btn-sm mb-1"
                                                        id="btn-undo-speaker-signature">
                                                        <i class="ti ti-arrow-back-up ti-xs px-2"></i>
                                                    </a>

                                                    <a href="javascript:void(0)" class="btn btn-danger btn-sm mb-1"
                                                        id="btn-clear-speaker-signature">
                                                        <i class="ti ti-trash-filled ti-xs px-2"></i>
                                                    </a>
                                                </div>

                                                <div class="col-md-11" style="height: 190px;">
                                                    <div id="signature-speaker-wrapper" class="signature-speaker-wrapper">
                                                        <canvas id="signature-pad" class="signature-pad" style="max-width: 100%;"></canvas>
                                                    </div>

                                                    <div class="signature-speaker-line"></div>

                                                    <div class="col-md-12 mt-3">
                                                        <div class="form-floating-custom">
                                                            <input type="text" name="speakerName" id="floatingInputSpeakerName" class="form-control" placeholder="Speaker name">
                                                
                                                            <label for="floatingInputSpeakerName">{{ __('Speaker name') }}</label>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>


                                        <div class="text-center mt-7">
                                            <p class="m-0">@lang('Speaker Signature')</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6 mt-4">
                                    <div class="signature-director">
                                        <div class="signature-director-body">
                                            <div class="row">
                                                <div class="col-md-1">
                                                    <a href="javascript:void(0)" class="btn btn-info btn-sm mb-1" id="btn-undo-director-signature">
                                                        <i class="ti ti-arrow-back-up ti-xs px-2"></i>
                                                    </a>

                                                    <a href="javascript:void(0)" class="btn btn-danger btn-sm mb-1" id="btn-clear-director-signature">
                                                        <i class="ti ti-trash-filled ti-xs px-2"></i>
                                                    </a>
                                                </div>

                                                <div class="col-md-11" style="height: 190px;">
                                                    <div id="signature-director-wrapper" class="signature-director-wrapper">
                                                        <canvas id="director-signature-pad" class="director-signature-pad"
                                                            style="max-width: 100%;"></canvas>
                                                    </div>

                                                    <div class="signature-director-line"></div>

                                                    <div class="col-md-12 mt-3">
                                                        <div class="form-floating-custom">
                                                            <input type="text" name="directorName" id="floatingInputDitectorName" class="form-control" placeholder="Director name">
                                                
                                                            <label for="floatingInputDitectorName">{{ __('Director name') }}</label>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>


                                        <div class="text-center mt-7">
                                            <p class="m-0">@lang('Director Signature')</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>

                        <div class="text-center mt-7">
                            <button class="btn btn-info" id="btn-preview-certificate">@lang('Download Preview Certificate')</button>
                            <button class="btn btn-success" id="btn-edit-settings">@lang('Update Preferences')</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@push('scripts')
    <script src="{{ Vite::asset('resources/assets/vendor/libs/@form-validation/umd/bundle/popular.min.js') }}"></script>
    <script src="{{ Vite::asset('resources/assets/vendor/libs/@form-validation/umd/plugin-bootstrap5/index.min.js') }}">
    </script>
    <script src="{{ Vite::asset('resources/assets/vendor/libs/@form-validation/umd/plugin-auto-focus/index.min.js') }}">
    </script>

    @vite('resources/js/src/settings/settings.js')
@endpush
