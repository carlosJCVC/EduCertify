<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserUniqueEmailRequest;
use App\Models\User;
use App\Traits\DatatableTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Yajra\DataTables\Facades\DataTables;

class UserController extends Controller
{
    use DatatableTrait;

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('admin.users.index');
    }

    /**
     * Display a listing of the resource.
     */
    public function json()
    {
        return DataTables::of(User::query())
            ->addColumn('name', fn ($record) => $record->full_name)
            ->addColumn('roles', fn ($record) => 'Admin')
            ->addColumn('status', fn ($record) => "<div class='badge {$record->status->badgeColor()} text-white'>{$record->status->value}</div>")
            ->addColumn('actions', fn ($record) => $this->getActionsButtons($record->id, false))
            ->rawColumns(['actions', 'status'])
            ->make(true);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $input = $request->all();
        $input['password'] = Hash::make('password');
        $user = User::create($input);

        if ($request->has('avatar')) {
            $user->updateProfilePhoto($request->file('avatar'));
        }

        return response()->json([
            'title' => __('Success!'),
            'message' => __('User was created successfully!'),
            'data' => $user
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // TODO change to repository
        $user = User::find($id);

        return response()->json([
            'data' => $user
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $user = User::find($id);
        $user->update($request->all());

        if ($request->has('avatar')) {
            $file = $request->file('avatar');
            $user->updateProfilePhoto($file);
        }

        return response()->json([
            'title' => __('Success!'),
            'message' => __('User was updated successfully!'),
            'data' => $user
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user = User::find($id);
        $user->delete();

        return response()->json([
            'title' => __('Success!'),
            'message' => __('User was deleted successfully!'),
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function verify(UserUniqueEmailRequest $request)
    {
        return response()->json([
            'title' => __('Success!'),
            'message' => __('The email has already been registered.'),
            'valid' => true,
        ], 200);
    }
}
