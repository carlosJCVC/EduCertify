<?php

use App\Http\Controllers\Admin\UserController;
use Illuminate\Support\Facades\Route;

Route::prefix('users')->name('users.')->group(function () {
    Route::get('/', [UserController::class, 'index'])->name('index');
    Route::get('json', [UserController::class, 'json'])->name('json');
    Route::get('create', [UserController::class, 'create'])->name('create');
    Route::post('store', [UserController::class, 'store'])->name('store');
    Route::post('verify', [UserController::class, 'verify'])->name('verify');
    Route::get('{id}/show', [UserController::class, 'show'])->name('show');
    Route::put('{id}/update', [UserController::class, 'update'])->name('update');
    Route::patch('{id}/update', [UserController::class, 'update'])->name('update');
    Route::delete('/{id}/delete', [UserController::class, 'destroy'])->name('destroy');
});