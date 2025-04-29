<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AkademikController;
use App\Http\Controllers\RegistrasiController;
use App\Http\Controllers\IRSController;
use App\Http\Controllers\KHSController;
use App\Http\Controllers\DashboardController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Auth
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);

// Dashboard data
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [UserController::class, 'user']);
    Route::get('/akademik/status', [AkademikController::class, 'status']);
    Route::post('/registrasi/status', [RegistrasiController::class, 'updateStatus']);
    Route::get('/irs', [IRSController::class, 'index']);
    Route::post('/irs', [IRSController::class, 'store']);
    Route::get('/khs', [KHSController::class, 'index']);
});
