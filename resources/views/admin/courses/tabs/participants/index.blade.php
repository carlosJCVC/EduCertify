<div class="card shadow-lg user-info-card mt-2">
    <div class="card-header bg-dark text-white">
        @lang('Enrolled participants')
    </div>

    <div class="card-body">
        <div id="table-default" class="table-responsive">
            <table id="participants-datatable" class="table w-100">
                <thead>
                    <tr>
                        <th>@lang('Participant')</th>
                        <th>@lang('Email')</th>
                        <th>@lang('Status')</th>
                        <th>@lang('Enrolled At')</th>
                        <th>@lang('Actions')</th>
                    </tr>
                </thead>

                <tbody class="table-tbody">
                </tbody>

                <tfoot>
                    <tr role="row">
                        <th>@lang('Participant')</th>
                        <th>@lang('Email')</th>
                        <th>@lang('Status')</th>
                        <th>@lang('Enrolled At')</th>
                        <th>@lang('Actions')</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
</div>
