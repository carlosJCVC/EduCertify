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
        Schema::create('settings', function (Blueprint $table) {
            $table->id();

            $table->string('title', 60);
            $table->string('speaker_name', 60);
            $table->string('director_name', 60);
            $table->string('logo_image_path', 2048)->nullable();
            $table->string('background_image_path', 2048)->nullable();
            $table->string('background_color')->nullable();
            $table->string('text_color')->nullable();
            $table->string('text_font')->nullable();
            $table->text('director_signature_data_url')->nullable();
            $table->json('director_signature_data')->nullable();
            $table->text('speaker_signature_data_url')->nullable();
            $table->json('speaker_signature_data')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('settings');
    }
};
