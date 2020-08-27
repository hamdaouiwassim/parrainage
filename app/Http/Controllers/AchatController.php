<?php

namespace App\Http\Controllers;

use App\Achat;
use App\Parrainage;
use App\Produit;
use App\Commission;
use Illuminate\Http\Request;

class AchatController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $achats = Achat::paginate(4);
        return response()->json($achats, 200);
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
       

        $achat = new Achat();
        $achat->idproduit = $request->idproduit ; 
        $achat->idclient = $request->iduser ;
        
        if ( $achat->save()){
            //chercher le parrain
            $parrain = Parrainage::where('client',$request->iduser)->get();  
            $produit = Produit::find($request->idproduit); 
            $commission = new Commission();
            $commission->idclient = $request->iduser ;
            $commission->idbeneficiaire = $parrain[0]->parrain  ;
            $commission->type = "Parrainage";
            $commission->prix = ( $produit->price*10 )/100;
            $commission->save();
            // chercher 4 pere dans 4 niveau
            $pere = $parrain[0]->pere;
            $commission = new Commission();
            $commission->idclient = $request->iduser ;
            $commission->idbeneficiaire = $pere;
            $commission->type = "Reseau";
            $commission->prix = ( $produit->price*10 )/100;
            $commission->save();
            for( $i=1;$i<4 ; $i++ ){
                $pere = $this->chercherPere($pere);
               
                switch($i){
                    case 1 : $pourcentage = 5 ; break;
                    case 2 : $pourcentage = 3 ; break;
                    case 3 : $pourcentage = 2 ; break;
                }
                if ($pere){
                    $commission = new Commission();
                    $commission->idclient = $request->iduser ;
                    $commission->idbeneficiaire = $pere;
                    $commission->type = "Reseau";
                    $commission->prix = ( $produit->price*$pourcentage )/100;
                    $commission->save();
                }
                

            }
            


            return response()->json($achat, 200);
        }else{
            return response()->json([
                        "message"=>"Erreur de l'achat",
                        "status_code" => 500
                        ]
            , 500);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Achat  $achat
     * @return \Illuminate\Http\Response
     */
    public function show(Achat $achat)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Achat  $achat
     * @return \Illuminate\Http\Response
     */
    public function edit(Achat $achat)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Achat  $achat
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Achat $achat)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Achat  $achat
     * @return \Illuminate\Http\Response
     */
    public function destroy(Achat $achat)
    {
        //
    }
    public function getUserAchats($id){
        $achats = Achat::where('idclient',$id)->paginate(4);
        //dd($achats);
        return response()->json($achats, 200);
        

    }
    public function chercherPere($pere){
        $parrain = Parrainage::where('client',$pere)->get();
        if ( count($parrain) > 0 ){
                return $parrain[0]->pere;
        }    
        return null;
    }
}
