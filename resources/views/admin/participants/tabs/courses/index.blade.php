<div class="card mt-2">
    <div class="card-header bg-dark text-white">
        <div class="row w-100">
            <div class="col-md-6">
                <p>@lang('Enrolled courses')</p>
            </div>

            <div class="col-md-6 text-end">
                <a href="javascript:void(0)" class="btn btn-md btn-info px-2" id="btn-enroll-participant">
                    <i class="ti ti-plus ti-xs ms-0 me-2"></i>@lang('Enroll Course Now')
                </a>
            </div>
        </div>
    </div>

    <div class="card-body">
        <div id="table-default" class="table-responsive">
            <table id="courses-datatable" class="table w-100">
                <thead>
                    <tr>
                        <th>@lang('Name')</th>
                        <th>@lang('Speaker')</th>
                        <th>@lang('Categories')</th>
                        <th>@lang('Level')</th>
                        <th>@lang('Start date')</th>
                        <th>@lang('End date')</th>
                        <th>@lang('Actions')</th>
                    </tr>
                </thead>

                <tfoot>
                    <th>@lang('Name')</th>
                    <th>@lang('Speaker')</th>
                    <th>@lang('Categories')</th>
                    <th>@lang('Level')</th>
                    <th>@lang('Start date')</th>
                    <th>@lang('End date')</th>
                    <th>@lang('Actions')</th>
                </tfoot>

                <tbody class="table-tbody">
                </tbody>
            </table>
        </div>
    </div>
</div>
