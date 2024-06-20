<div class="card user-info-card mt-2">
    <div class="card-header bg-dark text-white">
        @lang('Enrolled participants')
    </div>

    <div class="card-body">
        <div id="table-default" class="table-responsive">
            <table id="participants-datatable" class="table w-100">
                <thead>
                    <tr>
                        <th>@lang('Full name')</th>
                        <th>@lang('Email')</th>
                        <th>@lang('Status')</th>
                        <th>@lang('Enrolled At')</th>
                        <th>@lang('Actions')</th>
                    </tr>
                </thead>

                <tfoot>
                    <th>@lang('Full name')</th>
                    <th>@lang('Email')</th>
                    <th>@lang('Status')</th>
                    <th>@lang('Enrolled At')</th>
                    <th>@lang('Actions')</th>
                </tfoot>

                <tbody class="table-tbody">
                </tbody>
            </table>
        </div>
    </div>
</div>
