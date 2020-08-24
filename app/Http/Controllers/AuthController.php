<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Parrainage;
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
            'parrainage_link' => 'required|string',
        ]);

        

        


        if ( count($this->getIdUserParrain($request->parrainage_link)) > 0 ){
            // Parrainage link exist   
            $user = new User();
            $user->name = $request->name ;
            $user->email = $request->email;
            //$user->niveau =  $this->getlastLevel();
            //$user->pere =  1;
            $user->parrainage_link = md5(uniqid(rand(), true));
            $user->password = bcrypt($request->password);
    
            if ( $user->save() ){
                // Creation des liens de parrainage
                $parrain = $this->getIdUserParrain($request->parrainage_link);
                $parrainages = Parrainage::all();
                
                if ( count($parrainages) == 0  ){
                    //dd($parrain[0]->id);
                    $Parrainage = new Parrainage();
                    $Parrainage->pere = $parrain[0]->id ;
                    $Parrainage->parrain = $parrain[0]->id;
                    $Parrainage->client = $user->id;
                    $Parrainage->niveau = 1;
                    $Parrainage->next_pere = $user->id;
                    $Parrainage->save();
                        
                }else{
                    $last_parrainage = Parrainage::latest()->first();
                    $current_father = $last_parrainage->pere ;
                    
                }

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



        }else{

            return response()->json([
                'message' => 'parrainage link incorrecte',
                'status_code' => 500

            ], 500);

        }

       

    }

    public function login(Request $request){
        $validatedData = $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);
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
               'message' => 'Invalid username/password',
               'status_code' => 401
           ], 401);
       }
       //$user = $request->user();
       $user = Auth::user();
       //return response()->json($user, 200);

       if ( $user->role == "admin"){
        
            $tokenData = $user->createToken('Personal Acces Token', ['admin']);
            //return response()->json($tokenData, 200);
       }else{
            $tokenData = $user->createToken('Personal Acces Token', ['user']);
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
    public function profile(Request $request){
        if ($request->user()){
            return response()->json($request->user(), 200);
        }
        return response()->json([
            'message'=> 'utilisateur non connectee ',
               'status_code' => 500

        ], 500);
        


    }
    public function getIdUserParrain($link){
        return User::where('parrainage_link','=',$link)->get();

    }
    public function getlastLevel(){

    }

}
