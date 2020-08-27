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
        Route::get('parrainage/directe/{id}', 'ParrainageController@getParrainageDirects');
        Route::get('parrainage/users', 'ParrainageController@getallusers');
        Route::get('parrainage/arbre/{id}', 'ParrainageController@arbre');
        Route::get('/achats/user/{id}',"AchatController@getUserAchats");
        Route::get('/commissions/user/{id}',"CommissionController@getUserCommissions");
        Route::get('/commissions/user/all/{id}',"CommissionController@getUserCommissionsAll");
        Route::get('/parrainage/user/{id}','ParrainageController@parrainageUser');
        Route::get('/users/all','ClientsController@getAllUsers');
        
        
        

      
        
        
    });

    Route::group(['middleware' => 'scope:admin'], function () {
        
          
    });
   
    Route::resource('clients', 'ClientsController');
    Route::resource('achats', 'AchatController');
    Route::resource('produits', 'ProduitsController');
    Route::get('/get-categories','ProduitsController@categories');
    Route::resource('categories', 'CategorieController');

});




    