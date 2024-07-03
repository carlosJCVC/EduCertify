<div class="card shadow-lg user-info-card mt-2">
    <div class="card-header bg-dark text-white">
        @lang('Certificate Preferences')
    </div>

    <div class="card-body">
        <form id="course-preferences-form">
            <div class="row mt-2">
                <div class="col-md-5">
                    <input type="file" name="backgroundImage" id="background-image" data-height="266"
                        data-allowed-file-extensions="jpg jpeg png" class="form-control dropify"
                        placeholder="Background Image">
                </div>

                <div class="col-md-7">
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <label for="floatingInputName">{{ __('Certificate Background Color') }}</label>

                                <div style="width: 100%" id="bg-color-picker"></div>
                            </div>
                        </div>

                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <label for="floatingInputName">{{ __('Certificate Text Color') }}</label>

                                <div id="text-color-picker"></div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <div class="signature-speaker">                                
                                <div class="signature-speaker-body">
                                    <div class="row">
                                        <div class="col-md-1">
                                            <a href="javascript:void(0)" class="btn btn-warning btn-sm mb-1" id="btn-undo-signature">
                                                <i class="ti ti-arrow-back-up ti-xs px-2"></i>
                                            </a>
    
                                            <a href="javascript:void(0)" class="btn btn-danger btn-sm mb-1" id="btn-clear-signature">
                                                <i class="ti ti-trash-filled ti-xs px-2"></i>
                                            </a>
                                        </div>

                                        <div class="col-md-11" style="height: 190px;">
                                            <div id="signature-speaker-wrapper" class="signature-speaker-wrapper">
                                                <canvas id="signature-pad" class="signature-pad" style="max-width: 100%;"></canvas>
                                            </div>

                                            <div class="signature-speaker-line"></div>
                                        </div>
                                    </div>
                                </div>


                                <div class="text-center mt-2">
                                    <p class="m-0">{{ $course->speaker->full_name }}</p>
                                    <p class="m-0">@lang('Speaker Signature')</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>

        <div class="text-center mt-5">
            <button class="btn btn-info" id="btn-preview-certificate">@lang('Download Preview Certificate')</button>
            <button class="btn btn-success" id="btn-edit-preferences">@lang('Update Preferences')</button>
        </div>
    </div>
</div>
