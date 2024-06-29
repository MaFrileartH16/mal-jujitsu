<?php
  
  use App\Http\Controllers\AthleteController;
  use App\Http\Controllers\CoachController;
  use App\Http\Controllers\EvaluationController;
  use App\Http\Controllers\ExerciseController;
  use App\Http\Controllers\HistoryController;
  use App\Http\Controllers\ProfileController;
  use App\Http\Controllers\ReportController;
  use App\Http\Controllers\TournamentController;
  use App\Models\Athlete;
  use App\Models\Coach;
  use App\Models\Exercise;
  use App\Models\ExerciseEvaluation;
  use App\Models\History;
  use App\Models\Tournament;
  use Illuminate\Support\Facades\Auth;
  use Illuminate\Support\Facades\Route;
  use Inertia\Inertia;
  
  Route::fallback(fn() => to_route(auth()->check() ? 'dashboard' : 'login'));
  
  Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
      $authedUser = Auth::user();
      $authedUser->avatar = str_contains($authedUser->avatar, 'https') ? $authedUser->avatar : ($authedUser->avatar ? asset('storage/' . $authedUser->avatar) : null);
      
      $exercises = [];
      $tournaments = [];
      $evaluations = [];
      
      if (in_array($authedUser->role, ['Ne-Waza', 'Fighting'])) {
        $exercises = Exercise::where('athlete_id', $authedUser->id)->get();
        $tournaments = Tournament::where('athlete_id', $authedUser->id)->get();
        $evaluations = ExerciseEvaluation::where('athlete_id', $authedUser->id)->get();
      } else {
        $exercises = Exercise::all();
        $tournaments = Tournament::all();
        $evaluations = ExerciseEvaluation::all();
      }
      
      return Inertia::render('Dashboard', [
        'unread_histories' => History::where('is_read', false)->get(),
        'meta' => session('meta'),
        'auth' => ['user' => $authedUser],
        'coaches' => Coach::all(),
        'athletes' => Athlete::with(['user', 'tournaments'])->get()->map(function ($athlete) {
          $athlete->gold_medals = $athlete->tournaments->where('medal', 'Emas')->count();
          $athlete->silver_medals = $athlete->tournaments->where('medal', 'Perak')->count();
          $athlete->bronze_medals = $athlete->tournaments->where('medal', 'Perunggu')->count();
          $athlete->total_medals = $athlete->gold_medals + $athlete->silver_medals + $athlete->bronze_medals;
          return $athlete;
        }),
        'exercises' => $exercises,
        'tournaments' => $tournaments,
        'evaluations' => $evaluations,
        'reports' => Athlete::with(['tournaments', 'evaluations'])
          ->has('evaluations')
          ->orWhereHas('tournaments')
          ->get()
      ]);
    })->name('dashboard');
    
    Route::group(['prefix' => 'athletes'], function () {
      Route::get('', [AthleteController::class, 'index'])->name('athletes.index');
      Route::get('create', [AthleteController::class, 'create'])->name('athletes.create');
      Route::post('', [AthleteController::class, 'store'])->name('athletes.store');
      Route::get('{user}', [AthleteController::class, 'show'])->name('athletes.show');
      Route::get('{user}/edit', [AthleteController::class, 'edit'])->name('athletes.edit');
      Route::put('{user}', [AthleteController::class, 'update'])->name('athletes.update');
      Route::delete('{user}', [AthleteController::class, 'destroy'])->name('athletes.destroy');
    });
    
    Route::group(['prefix' => 'coaches'], function () {
      Route::get('', [CoachController::class, 'index'])->name('coaches.index');
      Route::get('create', [CoachController::class, 'create'])->name('coaches.create');
      Route::post('', [CoachController::class, 'store'])->name('coaches.store');
      Route::get('{user}', [CoachController::class, 'show'])->name('coaches.show');
      Route::get('{user}/edit', [CoachController::class, 'edit'])->name('coaches.edit');
      Route::put('{user}', [CoachController::class, 'update'])->name('coaches.update');
      Route::delete('{user}', [CoachController::class, 'destroy'])->name('coaches.destroy');
    });
    
    Route::group(['prefix' => 'exercises'], function () {
      Route::get('', [ExerciseController::class, 'index'])->name('exercises.index');
      Route::get('create', [ExerciseController::class, 'create'])->name('exercises.create');
      Route::post('', [ExerciseController::class, 'store'])->name('exercises.store');
      Route::get('{exercise}', [ExerciseController::class, 'show'])->name('exercises.show');
      Route::get('{exercise}/edit', [ExerciseController::class, 'edit'])->name('exercises.edit');
      Route::put('{exercise}', [ExerciseController::class, 'update'])->name('exercises.update');
      Route::delete('{exercise}', [ExerciseController::class, 'destroy'])->name('exercises.destroy');
    });
    
    Route::group(['prefix' => 'tournaments'], function () {
      Route::get('', [TournamentController::class, 'index'])->name('tournaments.index');
      Route::get('create', [TournamentController::class, 'create'])->name('tournaments.create');
      Route::post('', [TournamentController::class, 'store'])->name('tournaments.store');
      Route::get('{tournament}', [TournamentController::class, 'show'])->name('tournaments.show');
      Route::get('{tournament}/edit', [TournamentController::class, 'edit'])->name('tournaments.edit');
      Route::put('{tournament}', [TournamentController::class, 'update'])->name('tournaments.update');
      Route::delete('{tournament}', [TournamentController::class, 'destroy'])->name('tournaments.destroy');
    });
    
    Route::group(['prefix' => 'evaluations'], function () {
      Route::get('', [EvaluationController::class, 'index'])->name('evaluations.index');
      Route::get('create', [EvaluationController::class, 'create'])->name('evaluations.create');
      Route::post('', [EvaluationController::class, 'store'])->name('evaluations.store');
      Route::get('{exerciseEvaluation}', [EvaluationController::class, 'show'])->name('evaluations.show');
      Route::get('{exerciseEvaluation}/edit', [EvaluationController::class, 'edit'])->name('evaluations.edit');
      Route::put('{exerciseEvaluation}', [EvaluationController::class, 'update'])->name('evaluations.update');
      Route::delete('{exerciseEvaluation}', [EvaluationController::class, 'destroy'])->name('evaluations.destroy');
    });
    
    Route::group(['prefix' => 'reports'], function () {
      Route::get('', [ReportController::class, 'index'])->name('reports.index');
//      Route::get('create', [EvaluationController::class, 'create'])->name('evaluations.create');
//      Route::post('', [EvaluationController::class, 'store'])->name('evaluations.store');
      Route::get('{user}', [ReportController::class, 'show'])->name('reports.show');
//      Route::get('{exerciseEvaluation}/edit', [EvaluationController::class, 'edit'])->name('evaluations.edit');
//      Route::put('{exerciseEvaluation}', [EvaluationController::class, 'update'])->name('evaluations.update');
//      Route::delete('{exerciseEvaluation}', [EvaluationController::class, 'destroy'])->name('evaluations.destroy');
    });
    
    Route::group(['prefix' => 'profile'], function () {
      Route::get('', [ProfileController::class, 'edit'])->name('profile.edit');
      Route::put('', [ProfileController::class, 'update'])->name('profile.update');
      Route::delete('', [ProfileController::class, 'destroy'])->name('profile.destroy');
    });
    
    Route::group(['prefix' => 'histories'], function () {
      Route::get('', [HistoryController::class, 'index'])->name('histories.index');
      Route::put('histories/{id}', [HistoryController::class, 'update'])->name('histories.update');
    });
  });
  
  
  require __DIR__ . '/auth.php';
