<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::get('/', [ProfileController::class, 'topUpMainAccount'])
    ->name('top-up-main-account');

