<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

// Route::get('/extensions/php/{page}', function ($page) {
//     $safePage = basename($page); // Sécurité minimale
//     $file = resource_path("extensions/php/{$safePage}.php");
//
//     if (file_exists($file)) {
//         ob_start();
//         include $file;
//         return response(ob_get_clean());
//     }
//
//     abort(404);
// });

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
