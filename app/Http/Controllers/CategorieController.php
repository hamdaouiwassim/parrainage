<?php

namespace App\Http\Controllers;

use App\Categorie;
use Illuminate\Http\Request;

class CategorieController extends Controller
{
        /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //

        $categories = Categorie::paginate(4);
        return response()->json($categories, 200);
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

        $validatedData = $request->validate([
            'name' => 'required','min:3',
            'description' => 'required',
        
        ]);
        $categorie = new Categorie();
        $categorie->name = $request->input('name');
        $categorie->description = $request->input('description');
        if ( $categorie->save()){
            return response()->json($categorie, 200);
        }else{
            return response()->json([
                        "message"=>"Erreur de sauvgarde",
                        "status_code" => 500
                        ]
            , 500);
        }

       // dd($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        //dd($categorie);
        $categorie = Categorie::find($id);
        $validatedData = $request->validate([
            'name' => 'required','min:3',
            'description' => 'required',
        ]);

        $categorie->name = $request->input('name');
        $categorie->description = $request->input('description');
        
        if ( $categorie->update()){   
            return response()->json($categorie, 200);
        }else{
            //Storage::delete($oldPath);
            return response()->json([
                        "message"=>"Erreur de mis a jour du categorie",
                        "status_code" => 500
                        ]
            , 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $produits = Categorie::find($id)->produits;
        if (Categorie::find($id)->delete()){
            foreach( $produits as $produit ){
                    $produit->delete();
            }
            //Storage::delete($categorie->image);
            return response()->json([
                "message"=>"categorie supprimer avec succes",
                "status_code" => 200
        ], 200);

        }else{
            return response()->json([
                "message"=>"Erreur de suppression",
                "status_code" => 500
            ], 500);
        }
    }
}
