<?php

namespace App\Http\Controllers;
use App\Commission;
use App\Parrainage;
use App\Produit;
use App\Achat;
use App\User;
use Illuminate\Http\Request;

class CommissionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $Commissions = Commission::paginate(4);
        return response()->json($Commissions, 200);

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
     * @param  \App\Commission  $commission
     * @return \Illuminate\Http\Response
     */
    public function show(Commission $commission)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Commission  $commission
     * @return \Illuminate\Http\Response
     */
    public function edit(Commission $commission)
    {
        //
        $commissions = Commission::paginate(4);
        return response()->json($commissions, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Commission  $commission
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Commission $commission)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Commission  $commission
     * @return \Illuminate\Http\Response
     */
    public function destroy(Commission $commission)
    {
        //
    }
    public function getUserCommissions($id)
    {
        //
        $commissions = Commission::where('idbeneficiaire',$id)->paginate(4);
        //dd($achats);
        return response()->json($commissions, 200);
    }

    public function getUserCommissionsAll($id)
    {
        //
        $commissions = Commission::where('idbeneficiaire',$id)->get();
        //dd($achats);
        return response()->json($commissions, 200);
    }

    public function getStat(){
       $data = array();
       $data[] = User::all()->count();
       $data[] = Produit::all()->count();
       $data[] = Commission::all()->count();
       $data[] = Achat::all()->count();
       return response()->json($data, 200);
    }

    


    public function commissionMois(){
        $courrent_date = date('d');
        $courrent_month = date('m');
    
        $from = date('Y')."-".($courrent_month-1)."-01" ;
        $to = date('Y')."-".($courrent_month-1)."-31" ;
        $commissionsM = Commission::where('type','Mensuelle')
                        ->whereBetween('created_at', [$from, $to])->get();

if (count($commissionsM == 0 )){
                
             // lister tt les utilisateurs sauf les utilisateurs de dernier niveau 
             $last_level = Parrainage::max('niveau');
             $users = User::all();
             
             
             foreach($users as $user){
                 // chercher fils
                 $fils = Parrainage::where('pere',$user->id)->get();

                 if (  count($fils) == 2 ){
                     // pour chaque fils
                     $pts = array();
                    
                     foreach($fils as $f){
                         // chercher le nombre du pts pour chaque fils
                         $from = date('Y')."-".($courrent_month-1)."-01" ;
                         $to = date('Y')."-".($courrent_month-1)."-31" ;
                         $commissions = Commission::where('idclient',$f->client)
                                         ->where('type','Reseau')
                                         ->whereBetween('created_at', [$from, $to])->get();
                         $sc = 0;
                        foreach($commissions as $c){
                             $sc += $c->prix; 
                         }
                         $pts[] = $sc;
                         }// endforeach
                         //dd($pts);
            
                                        if ( $pts[0] != 0 ||  $pts[1] != 0 ){
                                                        if ( $pts[0] == $pts[1] ){
                                                            $commission = new Commission();
                                                            $commission->idclient = $fils[0]->client ;
                                                            $commission->idbeneficiaire = $user->id;
                                                            $commission->type = "Mensuelle";
                                                            $commission->prix = $pts[0];
                                                            $commission->save();
                                                        }elseif ($pts[0] > $pts[1]  ){    
                                                            $commission = new Commission();
                                                            $commission->idclient = $fils[0]->client ;
                                                            $commission->idbeneficiaire = $user->id;
                                                            $commission->type = "Mensuelle";
                                                            $commission->prix = $pts[0] - $pts[1];
                                                            $commission->save();

                                                        }else{
                                                            $commission = new Commission();
                                                            $commission->idclient = $fils[0]->client ;
                                                            $commission->idbeneficiaire = $user->id;
                                                            $commission->type = "Mensuelle";
                                                            $commission->prix = $pts[1] - $pts[0];
                                                            $commission->save();
                                                        }

                                        } // endif


                    
  
        } // endif
    }// endforeach 
} 
        return response()->json("done", 200);
            

    }
    
}
