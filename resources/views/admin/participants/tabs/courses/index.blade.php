<div class="card user-info-card mt-2">
    <div class="card-header bg-dark text-white">
        @lang('Enrolled courses')
    </div>

    <div class="card-body">
        <div id="table-default" class="table-responsive">
            <table id="courses-datatable" class="table">
                <thead>
                    <tr>
                        <th>@lang('Name')</th>
                        <th>@lang('Teacher')</th>
                        <th>@lang('Status')</th>
                        <th>@lang('Created At')</th>
                        <th>@lang('Actions')</th>
                    </tr>
                </thead>

                <tfoot>
                    <th>@lang('Name')</th>
                    <th>@lang('Teacher')</th>
                    <th>@lang('Status')</th>
                    <th>@lang('Created At')</th>
                    <th>@lang('Actions')</th>
                </tfoot>

                <tbody class="table-tbody">
                </tbody>
            </table>
        </div>
    </div>
</div>
