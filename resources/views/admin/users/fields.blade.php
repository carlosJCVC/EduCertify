<div class="row">
    <div class="col-4 mb-3">
        <input type="file" name="avatar" id="avatar" data-height="145" data-allowed-file-extensions="jpg jpeg png"
            class="form-control dropify" placeholder="Avatar">
    </div>

    <div class="col-8 mb-3">
        <div class="row">
            <div class="col-12 mb-3">
                <div class="form-floating-custom">
                    <input type="text" name="firstName" class="form-control" id="floatingInputFirtName" placeholder="First Name">

                    <label for="floatingInputFirtName">{{ __('First Name') }}</label>
                </div>
            </div>

            <div class="col-12 mb-3">
                <div class="form-floating-custom">
                    <input type="text" name="lastName" class="form-control" id="floatingInputLastName" placeholder="Last Name">

                    <label for="floatingInputLastName">{{ __('Last Name') }}</label>
                </div>
            </div>

            <div class="col-12 mb-3">
                <div class="form-floating-custom">
                    <input type="text" name="email" class="form-control" id="floatingInputEmail" placeholder="Email">

                    <label for="floatingInputEmail">{{ __('Email') }}</label>
                </div>
            </div>
        </div>
    </div>


    <div class="col-12 mb-3">
        <div class="form-floating-custom">
            <input type="text" class="form-control select-status tagify-status" name="status" value="Active" id="floatingInputStatus">

            <label for="floatingInputStatus">{{ __('Status') }}</label>
        </div>
    </div>
</div>
