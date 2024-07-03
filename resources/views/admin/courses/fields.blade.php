<div class="row">
    <div class="col-12 mb-3">
        <div class="form-floating-custom">
            <input type="text" name="name" id="floatingInputName" class="form-control" placeholder="Course Name">

            <label for="floatingInputName">{{ __('Name') }}</label>
        </div>
    </div>

    <div class="col-12 mb-3">
        <div class="form-floating-custom">
            <select name="speaker" class="form-control select2 select2-speaker" id="speaker-select2"></select>

            <label for="floatingInputSpeaker">{{ __('Speaker') }}</label>
        </div>
     </div>

    <div class="col-12 mb-3">
        <div class="form-floating-custom">
            <input type="text" class="form-control select-category tagify-category" name="category" id="floatingInputCategory" >
    
            <label for="floatingInputCategory">{{ __('Category') }}</label>
        </div>
    </div>

    <div class="col-12 mb-3">
        <div class="form-floating-custom">
            <input type="text" class="form-control select-level tagify-level" name="level" value="Beginner" id="floatingInputLevel">
                    
            <label for="floatingInputLevel">{{ __('Level') }}</label>
        </div>
    </div>

    <div class="col-12 mb-3">
        <div class="form-floating-custom">
            <input type="text" name="startDate" id="floatingInputStartDate" class="form-control" placeholder="Start Date">
        
            <label for="floatingInputStartDate">{{ __('Start date') }}</label>
        </div>
    </div>

    <div class="col-12 mb-3">
        <div class="form-floating-custom">
            <input type="text" name="endDate" id="floatingInputEndDate" class="form-control" placeholder="End date">

            <label for="floatingInputEndDate">{{ __('End date') }}</label>
        </div>
    </div>

    <div class="col-12 mb-3">
        <div class="form-floating-custom">
            <textarea name="description" id="floatingInputDescription" class="form-control" placeholder="Please write a description..."></textarea>

            <label for="floatingInputDescription">{{ __('Description') }}</label>
        </div>
    </div>
</div>
