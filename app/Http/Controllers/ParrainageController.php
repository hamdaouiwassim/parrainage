<?php

namespace App\Http\Controllers;

use App\Parrainage;
use App\User;
use Illuminate\Http\Request;

class ParrainageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Parrainage  $parrainage
     * @return \Illuminate\Http\Response
     */
    public function show(Parrainage $parrainage)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Parrainage  $parrainage
     * @return \Illuminate\Http\Response
     */
    public function edit(Parrainage $parrainage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Parrainage  $parrainage
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Parrainage $parrainage)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Parrainage  $parrainage
     * @return \Illuminate\Http\Response
     */
    public function destroy(Parrainage $parrainage)
    {
        //
    }

    public function getParrainageDirects($id){

        $pdirects = Parrainage::where('parrain',$id)->get();
        return response()->json($pdirects, 200);

    }
    public function getallusers(){

        $users = User::where('role','=','user')->get();
        return response()->json($users, 200);

    }

    public function chercherFils($pere){
        return  Parrainage::where('pere',$pere)->get();

    }
    public function arbre($pere){

        $tab = array();
        // niveau 1
        $tab[0] = array();
        foreach( $this->chercherFils($pere) as $fils ){
            $tab[0][] = $fils->client ;        
                
        }
        if (count($tab) > 0  ){
                foreach( $tab[0] as $f1  ){
                    foreach( $this->chercherFils($f1) as $fils ){
                        $tab[1][] = $fils->client ;        
                            
                    }
                            
                        
                }
        }
        if (count($tab) > 1  ){
                foreach( $tab[1] as $f2  ){
                    foreach( $this->chercherFils($f2) as $fils ){
                        $tab[2][] = $fils->client ;        
                            
                    }
                            
                        
                }
        }
        return response()->json($tab, 200);
       
        

    }

}
