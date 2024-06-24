<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('course_settings', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('course_id')->nullable();
            $table->string('background_image_path', 2048)->nullable();
            $table->string('background_color')->nullable();
            $table->string('text_color')->nullable();
            $table->string('text_font')->nullable();
            $table->text('signature_path')->nullable();

            $table->foreign('course_id')->references('id')->on('courses');

            $table->timestamps();
        });

        Schema::table('courses', function (Blueprint $table) {
            $table->unsignedBigInteger('setting_id')->after('speaker_id')->nullable();

            $table->foreign('setting_id')->references('id')->on('course_settings');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('courses', function (Blueprint $table) {
            $table->dropForeign(['setting_id']);
            $table->dropColumn('setting_id');
        });

        Schema::dropIfExists('course_settings');
    }
};
