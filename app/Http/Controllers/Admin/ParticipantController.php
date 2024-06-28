<?php


namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\UniqueEmailRequest;
use App\Models\CourseParticipant;
use App\Models\Participant;
use App\Traits\DatatableTrait;
use Illuminate\Http\JsonResponse;
use Illuminate\View\View;
use Yajra\DataTables\Facades\DataTables;

class ParticipantController extends Controller
{
    use DatatableTrait;

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('admin.participants.index');
    }

    /**
     * Display a listing of the resource.
     */
    public function json()
    { 
        return DataTables::of(Participant::query())
            ->addColumn('name', fn ($record) => $record->full_name)
            ->addColumn('email', fn ($record) => $record->email)
            ->addColumn('birthdate', fn ($record) => is_null($record->birthdate) ? '' : $record->birthdate->format('d M, Y'))
            ->addColumn('created_at', fn ($record) => $record->created_at)
            ->addColumn('status', fn ($record) => "<div class='badge {$record->status->badgeColor()} text-white'>{$record->status->value}</div>")
            ->addColumn('actions', fn ($record) => $this->getActionsButtons($record->id))
            ->rawColumns(['actions', 'status'])
            ->make(true);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $input = $request->all();
        $participant = Participant::create($input);

        if ($request->has('avatar')) {
            $participant->updateProfilePhoto($request->file('avatar'));
        }

        return response()->json([
            'title' => __('Success!'),
            'message' => __('Participant was created successfully!'),
            'data' => $participant
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): View|JsonResponse
    {
        $participant = Participant::find($id);
        $participantEnrollAll = CourseParticipant::All();
        $participantEnrollCourse = $participantEnrollAll->whereIn('participant_id', $id);

        if (request()->wantsJson()) {
            return response()->json([
                'data' => $participant
            ], 200);
        }

        return view('admin.participants.show')->with(['participant' => $participant, 'courseEnroll' => $participantEnrollCourse]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $participant = Participant::find($id);
        $participant->update($request->all());

        if ($request->has('avatar')) {
            $file = $request->file('avatar');
            $participant->updateProfilePhoto($file);
        }

        return response()->json([
            'title' => __('Success!'),
            'message' => __('Participant was updated successfully!'),
            'data' => $participant
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $participant = Participant::find($id);
        $participant->delete();

        return response()->json([
            'title' => __('Success!'),
            'message' => __('Participant was deleted successfully!'),
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function verify(UniqueEmailRequest $request)
    {
        return response()->json([
            'title' => __('Success!'),
            'message' => __('The email has already been registered.'),
            'valid' => true,
        ], 200);
    }
}
