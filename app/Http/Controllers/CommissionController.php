<?php

namespace App\Http\Controllers;

use App\Commission;
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
}
