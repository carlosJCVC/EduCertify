<div class="card shadow-lg course-info-card mt-2" data-courseid="{{ $course->id }}">
    <div class="card-header text-white">
        <i class="fas fa-chalkboard-teacher me-2"></i> @lang('Course Information')
    </div>

    <div class="card-body">
        <div class="table-responsive">
            <table class="table table-bordered">
                <tbody>
                    <tr>
                        <th style="width: 200px;">@lang('Course Name')</th>
                        <td>{{ $course->name }}</td>
                    </tr>

                    <tr>
                        <th>@lang('Speaker')</th>
                        <td>{{ $course->speaker->full_name }}</td>
                    </tr>

                    <tr>
                        <th>@lang('Categories')</th>
                        <td>{{ $course->categories->pluck('name')->join(', ', ' and ') }}</td>
                    </tr>

                    <tr>
                        <th>@lang('Level')</th>
                        <td>{{ $course->level }}</td>
                    </tr>

                    <tr>
                        <th>@lang('Start Date')</th>
                        <td>{{ \Carbon\Carbon::parse($course->start_date)->format('d M, Y') }}</td>
                    </tr>
                    <tr>
                        <th>@lang('End Date')</th>
                        <td>{{ \Carbon\Carbon::parse($course->end_date)->format('d M, Y') }}</td>
                    </tr>
                    <tr>
                        <th>@lang('Description')</th>
                        <td>{{ $course->description }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <div class="card-footer text-right">
        <a href="{{ url()->previous() }}" class="btn btn-back"><i class="fas fa-arrow-left me-2"></i> Back</a>
    </div>
</div>
