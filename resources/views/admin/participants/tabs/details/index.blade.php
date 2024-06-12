<div class="card user-info-card mt-2">
    <div class="card-header bg-dark text-white">
        @lang('Participant Information')
    </div>

    <div class="card-body">
        <div class="row">
            <div class="col-md-4 text-center">
                <img class="w-75" src="{{ $participant->profile_photo_url }}" alt="User Avatar">
            </div>

            <div class="col-md-8">
                <div class="row">
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="firstName" class="form-label text-info">@lang('First Name')</label>

                            <input type="text" class="form-control" id="firstName"
                                value="{{ $participant->first_name }}" readonly>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="lastName" class="form-label text-info">@lang('Last Name')</label>

                            <input type="text" class="form-control" id="lastName"
                                value="{{ $participant->last_name }}" readonly>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="email" class="form-label text-info">@lang('Email')</label>

                            <input type="text" class="form-control" id="email" value="{{ $participant->email }}"
                                readonly>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="birthdate" class="form-label text-info">@lang('Birthdate')</label>

                            <input type="text" class="form-control" id="birthdate"
                                value="{{ $participant->birthdate }}" readonly>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="mb-3 d-grid">
                            <label for="status" class="form-label text-info">@lang('Status')</label>

                            {{-- <div class="btn btn-outline-success">{{$participant->status}}</div> --}}
                            {{-- <span class="badge bg-success rounded-pill text-white ">{{$participant->status}}</span> --}}
                            <input type="text" class="form-control" id="status" value="{{ $participant->status }}"
                                readonly>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="createdAt" class="form-label text-info">@lang('Created At')</label>

                            <input type="text" class="form-control" id="createdAt"
                                value="{{ $participant->created_at }}" readonly>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
