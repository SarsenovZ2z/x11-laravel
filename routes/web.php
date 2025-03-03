<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::get('/', [ProfileController::class, 'topUpMainAccount'])
    ->name('top-up-main-account');

Route::post('/top-up-account', [ProfileController::class, 'topUpAccount'])
    ->name('top-up-account');
