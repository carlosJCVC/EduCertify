<div class="row row-deck row-cards">
    <div class="col-12">
        <div class="row row-cards">
            <div class="col-sm-6 col-lg-3">
                @include('admin.dashboard.partials.card-detail', [
                    'bgcolor' => 'bg-indigo',
                    'icon' => '<i class="ti ti-users-group ti-md"></i>',
                    'title' => "{$dataSpeakers[1]} Speakers",
                    'subtitle' => "{$dataSpeakers[0]} Today",
                ])
            </div>
            <div class="col-sm-6 col-lg-3">
                @include('admin.dashboard.partials.card-detail', [
                    'bgcolor' => 'bg-warning',
                    'icon' => '<i class="ti ti-book ti-md"></i>',
                    'title' => "{$dataCourses[1]} Webinars",
                    'subtitle' => "{$dataCourses[0]} Today",
                ])
            </div>
            <div class="col-sm-6 col-lg-3">
                @include('admin.dashboard.partials.card-detail', [
                    'bgcolor' => 'bg-vk',
                    'icon' => '<i class="ti ti-school ti-md"></i>',
                    'title' => "{$dataParticipants[1]} Participants",
                    'subtitle' => "{$dataParticipants[0]} Today",
                ])
            </div>
            <div class="col-sm-6 col-lg-3">
                @include('admin.dashboard.partials.card-detail', [
                    'bgcolor' => 'bg-lime',
                    'icon' => '<i class="ti ti-school ti-xs"></i>',
                    'title' => '128 Certificates',
                    'subtitle' => '128 Today',
                ])
            </div>
        </div>
    </div>

    <div class="col-lg-4">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">@lang('User Status Overview')</h3>

                <canvas id="users-chart" class="chart-lg"></canvas>
            </div>
        </div>
    </div>

    <div class="col-lg-8">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">@lang('Courses By Category Overview')</h3>

                <canvas id="categories-chart" class="chart-lg"></canvas>
            </div>
        </div>
    </div>
</div>
