<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'auth'], function () {
    Route::post('register','AuthController@register');
    Route::post('login','AuthController@login');

    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('logout','AuthController@logout');
        Route::get('profile','AuthController@profile');
    });

});

Route::group(['middleware' => 'auth:api'], function () {
    Route::group(['middleware' => 'scope:user'], function () {
       
        
    });

    Route::group(['middleware' => 'scope:admin'], function () {
        Route::resource('produits', 'ProduitsController');
        Route::get('/get-categories','ProduitsController@categories');
        Route::resource('categories', 'CategorieController');
        Route::resource('clients', 'ClientsController');
        Route::resource('achats', 'AchatController');
        
    });

});




    