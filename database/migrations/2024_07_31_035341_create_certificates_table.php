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
        Schema::create('certificates', function (Blueprint $table) {
            $table->id();
            $table->foreignId('course_id');
            $table->foreignId('participant_id');
            $table->string('file_path');

            $table->foreign('course_id')
    	    ->references('id')->on('courses')
    	    ->onDelete('cascade');
    	
            $table->foreign('participant_id')
    	    ->references('id')->on('participants')
    	    ->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('certificates');
    }
};
