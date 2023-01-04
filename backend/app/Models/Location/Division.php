<?php

namespace App\Models\Location;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Division extends Model
{
    use HasFactory,SoftDeletes;

     public function districts(){
        return $this->hasMany('App\Models\Location\District');
    }
}
