<?php

use App\UserStatuses;
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
        Schema::create('speakers', function (Blueprint $table) {
            $table->id();

            $table->string('first_name', 64);
            $table->string('last_name', 64);
            $table->string('email')->unique();
            $table->enum('status', UserStatuses::toArray())->default(UserStatuses::ACTIVE);
            $table->string('phone_number')->nullable();
            $table->string('profile_photo_path', 2048)->nullable();
            $table->string('linkedin_profile')->nullable();
            $table->string('website')->nullable();
            $table->json('expertise')->nullable();
            $table->text('biography')->nullable();
            $table->text('notes')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('speakers');
    }
};
