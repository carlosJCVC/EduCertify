<div class="row">
    <div class="col-4 mb-3">
        <input type="file" name="avatar" id="avatar" data-height="145" data-allowed-file-extensions="jpg jpeg png"
            class="form-control dropify" placeholder="Avatar">
    </div>

    <div class="col-8 mb-3">
        <div class="row">
            <div class="col-12 mb-3">
                <div class="form-floating-custom">
                    <input type="text" name="firstName" id="floatingInputFirstName" class="form-control" placeholder="John">

                    <label for="floatingInputFirstName">{{ __('First Name') }}</label>
                </div>
            </div>

            <div class="col-12 mb-3">
                <div class="form-floating-custom">
                    <input type="text" name="lastName" id="floatingInputLastName" class="form-control" placeholder="Doe">

                    <label for="floatingInputLastName">{{ __('Last Name') }}</label>
                </div>
            </div>

            <div class="col-12 mb-3">
                <div class="form-floating-custom">
                    <input type="text" name="email" id="floatingInputEmail" class="form-control" placeholder="name@example.com">
    
                    <label for="floatingInputEmail">{{ __('Email address') }}</label>
                </div>
            </div>
        </div>
    </div>

    <div class="col-12 mb-3">
        <div class="form-floating-custom">
            <input type="text" name="birthdate" id="floatingInputBirthdate" class="form-control" placeholder="Birthdate">

            <label for="floatingInputBirthdate">{{ __('Birthdate') }}</label>
        </div>
    </div>

    <div class="col-12 mb-3">
        <div class="form-floating-custom">
            <input type="text" class="form-control select-tagify tagify-status" name="status" value="Active" id="floatingInputStatus">

            <label for="floatingInputStatus">{{ __('Status') }}</label>
        </div>
    </div>
</div>
