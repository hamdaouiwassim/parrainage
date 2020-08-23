<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Validator;
use App\Produit;
use App\Categorie;

class ProduitsController extends Controller
{
    
     /**
     * Display a listing of the categories.
     *
     * @return \Illuminate\Http\Response
     */
    public function categories()
    {
        //
        $categories = Categorie::all();
        return response()->json($categories, 200);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $produits = Produit::paginate(4);
        return response()->json($produits, 200);
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
            'categorie_id' => 'required',
            'name' => 'required','min:3',
            'image' => 'required|mimes:jpeg,png,jpg',
            'price' => 'required',
        ]);
        $produit = new Produit();
        $produit->idcategorie = $request->input('categorie_id');
        $produit->name = $request->input('name');
        $path = $request->file('image')->store('images_produits');
        $produit->image = $path;
        $produit->price = $request->input('price');
        
        if ( $produit->save()){
            return response()->json($produit, 200);
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
    public function update(Request $request, Produit $produit)
    {
        //
        //dd($produit);
        $validatedData = $request->validate([
            'categorie_id' => 'required',
            'name' => 'required','min:3',
            'price' => 'required',
        ]);
        $produit->idcategorie = $request->input('categorie_id');
        $produit->name = $request->input('name');
        $produit->price = $request->input('price');
        $oldPath = $produit->image;
        if ( $request->hasFile('image')){
            $validatedData = $request->validate([
                //'name' => 'required','min:3',
                'image' => 'required|mimes:jpeg,png,jpg',
                //'price' => 'required',
            ]);
            Storage::delete($oldPath);
            $path = $request->file('image')->store('images_produits');
            $produit->image = $path;
        }
        
        
        
        if ( $produit->update()){
           
            return response()->json($produit, 200);
        }else{
            Storage::delete($oldPath);
            return response()->json([
                        "message"=>"Erreur de mis a jour du produit",
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
    public function destroy(Produit $produit)
    {
        //
        //dd($produit);
        if ($produit->delete()){
            Storage::delete($produit->image);
            return response()->json([
                "message"=>"produit supprimer avec succes",
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
