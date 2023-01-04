<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('phone');
            $table->string('email');
            $table->string('father_name');
            $table->string('mother_name');
            $table->string('date_of_birth')->nullable();
            $table->string('gender');
            $table->string('address');
            $table->unsignedBigInteger('country_id');
            $table->foreign('country_id')->references('id')->on('countries')->onDelete('cascade');


            $table->unsignedBigInteger('division_id');
            $table->foreign('division_id')->references('id')->on('divisions')->onDelete('cascade');
            $table->unsignedBigInteger('district_id');
            $table->foreign('district_id')->references('id')->on('districts')->onDelete('cascade');


            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('students');
    }
};
