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
        Schema::create('educational_experience_speaker', function (Blueprint $table) {
            $table->id();
            $table->foreignId('educational_experience_id');
            $table->foreignId('speaker_id');

            $table->foreign('educational_experience_id')
            ->references('id')->on('educational_experiences')
            ->onDelete('cascade');

            $table->foreign('speaker_id')
            ->references('id')->on('speakers')
            ->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('educational_experience_speaker');
    }
};
