<?php

use Illuminate\Http\Request;

Route::post('/register', 'Auth\AuthController@register');
Route::post('/login', 'Auth\AuthController@login');
Route::post('/logout', 'Auth\AuthController@logout');

Route::group(['middleware' => 'jwt.auth'], function() {
  Route::get('/me', 'Auth\AuthController@user');
  
  Route::get('/notes', 'NotesController@index');
  Route::get('/notes/{note}', 'NotesController@show');
  Route::post('/notes/create', 'NotesController@store');
  Route::post('/notes/edit', 'NotesController@update');
  Route::delete('/notes/delete', 'NotesController@destroy');
});
