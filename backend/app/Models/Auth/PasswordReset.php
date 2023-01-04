<?php

namespace App\Models\Auth;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PasswordReset extends Model
{
    use HasFactory;
    const UPDATED_AT = null;

    protected $fillable = [
        'email',
        'token'
    ];
}
