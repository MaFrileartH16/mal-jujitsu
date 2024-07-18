<?php
  
  use Illuminate\Database\Migrations\Migration;
  use Illuminate\Database\Schema\Blueprint;
  use Illuminate\Support\Facades\Schema;
  
  return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
      Schema::create('evaluation_tournaments', function (Blueprint $table) {
        $table->uuid('id')->primary();
        $table->foreignUuid('evaluation_id')->constrained()->cascadeOnDelete();
        $table->foreignUuid('tournament_id')->constrained()->cascadeOnDelete();
      });
    }
    
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
      Schema::dropIfExists('evaluation_tournaments');
    }
  };
