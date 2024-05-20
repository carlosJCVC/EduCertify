<form action="" id="user-form">
    <div class="row">
        <div class="col-4 mb-3">
            <input
                type="file"
                name="avatar"
                id="avatar"
                data-height="150"
                data-allowed-file-extensions="jpg jpeg png" 
                class="form-control dropify"
                placeholder="Avatar">
        </div>

        <div class="col-8 mb-3">
            <div class="row">
                <div class="col-12 mb-3">
                    <input type="text" name="firstName" class="form-control" placeholder="First Name">
                </div>

                <div class="col-12 mb-3">
                    <input type="text" name="lastName" class="form-control" placeholder="Last Name">
                </div>

                <div class="col-12 mb-3">
                    <input type="text" name="email" class="form-control" placeholder="Email">
                </div>
            </div>
        </div>


        <div class="col-12 mb-3">
            <select class="form-select" name="status">
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
            </select>
        </div>
    </div>
</form>
