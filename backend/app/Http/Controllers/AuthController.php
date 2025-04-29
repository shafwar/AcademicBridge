<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        // Implementasi login
        return response()->json(['message' => 'Login sukses']);
    }

    public function logout(Request $request)
    {
        // Implementasi logout
        return response()->json(['message' => 'Logout sukses']);
    }
}
