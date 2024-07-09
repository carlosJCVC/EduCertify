<div class="row">
    <div class="col-4 mb-3">
        <input type="file" name="avatar" id="avatar" data-height="160" data-allowed-file-extensions="jpg jpeg png"
            class="form-control dropify" placeholder="Avatar">
    </div>

    <div class="col-8 mb-3">
        <div class="row">
            <div class="col-12 mb-3">
                <div class="form-floating-custom">
                    <input type="text" name="firstName" id="floatingInputFirstName" class="form-control"
                        placeholder="Write firt name...">

                    <label for="floatingInputFirstName">{{ __('First Name') }}</label>
                </div>
            </div>

            <div class="col-12 mb-3">
                <div class="form-floating-custom">
                    <input type="text" name="lastName" id="floatingInputLastName" class="form-control"
                        placeholder="Write last name...">

                    <label for="floatingInputLastName">{{ __('Last Name') }}</label>
                </div>
            </div>

            <div class="col-12 mb-3">
                <div class="form-floating-custom">
                    <input type="text" name="email" id="floatingInputEmail" class="form-control"
                        placeholder="name@example.com">

                    <label for="floatingInputEmail">{{ __('Email address') }}</label>
                </div>
            </div>
        </div>
    </div>

    <div class="col-6 mb-3">
        <div class="form-floating-custom">
            <input type="text" class="form-control select-tagify tagify-status" name="status" value="Active"
                id="floatingInputStatus">

            <label for="floatingInputStatus">{{ __('Status') }}</label>
        </div>
    </div>

    <div class="col-6 mb-3">
        <div class="form-floating-custom">
            <input type="number" name="phoneNumber" id="floatingInputPhoneNumber" class="form-control"
                placeholder="+591 70000001">

            <label for="floatingInputPhoneNumber">{{ __('Phone Number') }}</label>
        </div>
    </div>

    <div class="col-6 mb-3">
        <div class="form-floating-custom">
            <input type="text" name="linkedinProfile" id="floatingInputLinkedinProfile" class="form-control" placeholder="https://linkedin.in">

            <label for="floatingInputLinkedinProfile">{{ __('Linkedin profile') }}</label>
        </div>
    </div>

    <div class="col-6 mb-3">
        <div class="form-floating-custom">
            <input type="text" name="website" id="floatingInputWebsite" class="form-control" placeholder="https://my-website.com">

            <label for="floatingInputEmail">{{ __('Website') }}</label>
        </div>
    </div>

    <div class="col-12 mb-3">
        <div class="form-floating-custom">
            <input type="text" class="form-control select-expertise tagify-expertise" name="educationalExperiences" id="floatingInputExpertise">

            <label for="floatingInputExpertise">{{ __('Educational Experiences') }}</label>
        </div>
    </div>

    <div class="col-6 mb-3">
        <div class="form-floating-custom">
            <textarea name="biography" id="floatingInputBiography" class="form-control"
                placeholder="Please write a biograpfy here..."></textarea>

            <label for="floatingInputBiography">{{ __('Biography') }}</label>
        </div>
    </div>

    <div class="col-6 mb-3">
        <div class="form-floating-custom">
            <textarea name="notes" id="floatingInputNotes" class="form-control" placeholder="Please write a note here..."></textarea>

            <label for="floatingInputNotes">{{ __('Notes') }}</label>
        </div>
    </div>
</div>
