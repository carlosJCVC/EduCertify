<div class="card user-info-card mt-2">
    <div class="card-header bg-dark text-white">
        @lang('Enrolled courses')
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
