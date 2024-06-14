<?php
  
  namespace Database\Factories;
  
  use App\Models\Exercise;
  use App\Models\ExerciseEvaluation;
  use Illuminate\Database\Eloquent\Factories\Factory;
  
  /**
   * @extends Factory<ExerciseEvaluation>
   */
  class ExerciseEvaluationFactory extends Factory
  {
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
      $exercise = Exercise::inRandomOrder()->first();
      
      return [
        'athlete_id' => $exercise->athlete_id,
        'exercise_id' => $exercise->id,
        'note' => $this->faker->sentence,
      ];
    }
  }
