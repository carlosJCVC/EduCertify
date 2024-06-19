<?php

use App\CoursesLevel;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Query\Expression;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('speaker');
            $table->json('categories')->default(new Expression('(JSON_ARRAY())'));
            $table->enum('level', CoursesLevel::toArray())->default(CoursesLevel::BEGINNER);
            $table->timestamp('start_date');
            $table->timestamp('end_date');
            $table->text('description')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('courses');
    }
};
