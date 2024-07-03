<div class="card mt-2">
    <div class="card-header bg-dark text-white py-2 justify-content-between">
        <p class="my-0">@lang('Enrolled courses')</p>

        <a href="javascript:void(0)" class="btn btn-md btn-success px-2" id="btn-enroll-participant">
            <i class="ti ti-plus ti-xs ms-0 me-md-1"></i>

            <span class="d-none d-sm-inline-block">@lang('Enroll Course Now')</span>
        </a>
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
