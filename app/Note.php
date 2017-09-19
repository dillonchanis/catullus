<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Note extends Model
{   
    protected $fillable = ['user_id', 'title', 'body'];

    public function user() 
    {
        $this->belongsTo(User::class);
    }
}
