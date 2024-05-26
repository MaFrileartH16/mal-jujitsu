<?php
  
  namespace Database\Factories;
  
  use App\Models\Coach;
  use App\Models\User;
  use Illuminate\Database\Eloquent\Factories\Factory;
  
  /**
   * @extends Factory<Coach>
   */
  class CoachFactory extends Factory
  {
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
      return [
        'user_id' => User::factory()->create()->id,
      ];
    }
  }
