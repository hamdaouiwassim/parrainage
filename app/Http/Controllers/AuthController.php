<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Auth;
use Illuminate\Support\Carbon;
use Validator;

class AuthController extends Controller
{
    //
    public function register(Request $request){

     
        $validatedData = $request->validate([
            'name' => 'required|string|max:25',
            'email' => 'required|string|email',
            'password' => 'required|string|confirmed',
        ]);

        $user = new User();
        $user->name = $request->name ;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);

        if ( $user->save() ){
                return response()->json([
                    'message' => 'Utilisateur cree avec succes',
                    'status_code' => 201

                ], 201);
        }else{
            return response()->json([
                'message' => 'Creation echouee',
                'status_code' => 500

            ], 500);

        }

    }

    public function login(Request $request){
        /*return response()->json([
            'message' => 'Unauthorized',
            'status_code' => 401
        ], 401);
        
        $request->validate([
            'name' => 'required|string|max:25',
            'email' => 'required|string|email',
            'remember_me' => 'boolean'
        ]);
        */

       if (!Auth::attempt(['email' => $request->email, 'password' => $request->password]) ){
           return response()->json([
               'message' => 'Unauthorized',
               'status_code' => 401
           ], 401);
       }
       //$user = $request->user();
       $user = Auth::user();
       //return response()->json($user, 200);

       if ( $user->role == "admin"){
        
            $tokenData = $user->createToken('Personal Acces Token', ['do_anything']);
            //return response()->json($tokenData, 200);
       }else{
            $tokenData = $user->createToken('Personal Acces Token', ['can_use']);
       }

       $token = $tokenData->token;
       
       if ($request->remember_me ){
           $token->expires_at = Carbon::now()->addWeeks(1);

       }

       if ($token->save()){
           return response()->json([
               'user' => $user ,
               'access_token' => $tokenData->accessToken,
               'token_type' => 'Bearer',
               'token_scope' => $tokenData->token->scopes[0],
               'exipres_at' => Carbon::parse($tokenData->token->expires_at)->toDateTimeString(),
               'status_code' => 200
           ], 200);

       }else{
           return response()->json([
               'message'=> 'Erreur d\'authentification ',
               'status_code' => 500

           ], 500);
       }

    }

    public function logout(Request $request){
        $request->user()->token()->revoke();
        return response()->json([
            'message'=> 'utilisaateur deconnecte ',
               'status_code' => 200

        ], 200);


    }

}
