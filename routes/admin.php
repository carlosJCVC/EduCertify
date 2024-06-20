<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\CertificateController;
use App\Http\Controllers\Admin\CourseController;
use App\Http\Controllers\Admin\EnrollCourseController;
use App\Http\Controllers\Admin\EnrollParticipantController;
use App\Http\Controllers\Admin\ExpertiseController;
use App\Http\Controllers\Admin\ParticipantController;
use App\Http\Controllers\Admin\SearchController;
use App\Http\Controllers\Admin\SpeakerController;
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

/**
 * routes of Participants
 */
Route::prefix('participants')->name('participants.')->group(function () {
    Route::get('/', [ParticipantController::class, 'index'])->name('index');
    Route::get('json', [ParticipantController::class, 'json'])->name('json');
    Route::get('create', [ParticipantController::class, 'create'])->name('create');
    Route::post('store', [ParticipantController::class, 'store'])->name('store');
    Route::post('verify', [ParticipantController::class, 'verify'])->name('verify');
    Route::get('{id}/show', [ParticipantController::class, 'show'])->name('show');
    Route::put('{id}/update', [ParticipantController::class, 'update'])->name('update');
    Route::patch('{id}/update', [ParticipantController::class, 'update'])->name('update');
    Route::delete('/{id}/delete', [ParticipantController::class, 'destroy'])->name('destroy');
});

/**
 * routes of enroll courses with participants
 */
Route::prefix('participants/{id}')->name('participants')->group(function () {
    Route::get('courses/json', [EnrollCourseController::class, 'json'])->name('courses.json');
    Route::post('enroll/store', [EnrollCourseController::class, 'store'])->name('enroll.store');
    Route::delete('unenroll/{courseid}/delete', [EnrollCourseController::class, 'destroy'])->name('destroy');
    
    Route::prefix('certificates')->name('certificates')->group(function () {
        Route::post('send', [CertificateController::class, 'send'])->name('send');
        Route::post('send-all', [CertificateController::class, 'sendAll'])->name('send.all');
    });
});

/**
 * routes of Courses
 */
Route::prefix('courses')->name('courses.')->group(function () {
    Route::get('/', [CourseController::class, 'index'])->name('index');
    Route::get('json', [CourseController::class, 'json'])->name('json');
    Route::get('{id}/show-in-json', [CourseController::class, 'showInJson'])->name('json.show');
    Route::get('create', [CourseController::class, 'create'])->name('create');
    Route::post('store', [CourseController::class, 'store'])->name('store');
    Route::get('{id}/show', [CourseController::class, 'show'])->name('show');
    Route::put('{id}/update', [CourseController::class, 'update'])->name('update');
    Route::patch('{id}/update', [CourseController::class, 'update'])->name('update');
    Route::delete('/{id}/delete', [CourseController::class, 'destroy'])->name('destroy');
});

/**
 * routes of enroll participants to courses
 */
Route::prefix('courses/{id}')->name('courses')->group(function () {
    Route::get('participants/json', [EnrollParticipantController::class, 'json'])->name('participants.json');
    Route::post('enroll/store', [EnrollParticipantController::class, 'store'])->name('enroll.store');
    Route::delete('unenroll/{participantid}/delete', [EnrollParticipantController::class, 'destroy'])->name('destroy');
});

/**
 * routes for speakers
 */
Route::prefix('speakers')->name('speakers.')->group(function () {
    Route::get('/', [SpeakerController::class, 'index'])->name('index');
    Route::get('json', [SpeakerController::class, 'json'])->name('json');
    Route::get('create', [SpeakerController::class, 'create'])->name('create');
    Route::post('store', [SpeakerController::class, 'store'])->name('store');
    Route::get('{id}/show', [SpeakerController::class, 'show'])->name('show');
    Route::get('{id}/show-in-json', [SpeakerController::class, 'showInJson'])->name('json.show');
    Route::put('{id}/update', [SpeakerController::class, 'update'])->name('update');
    Route::post('verify', [SpeakerController::class, 'verify'])->name('verify');
    Route::patch('{id}/update', [SpeakerController::class, 'update'])->name('update');
    Route::delete('/{id}/delete', [SpeakerController::class, 'destroy'])->name('destroy');
});

/**
 * routes of categories
 */
Route::prefix('categories')->name('categories.')->group(function () {
    Route::get('/', [CategoryController::class, 'index'])->name('index');
    Route::get('json', [CategoryController::class, 'json'])->name('json');
});

/**
 * routes of categories
 */
Route::prefix('experties')->name('experties.')->group(function () {
    Route::get('/', [ExpertiseController::class, 'index'])->name('index');
    Route::get('json', [ExpertiseController::class, 'json'])->name('json');
});

/**
 * routes of search entities
 */
Route::prefix('search')->name('search.')->group(function () {
    Route::post('courses', [SearchController::class, 'speakers'])->name('speakers');
});