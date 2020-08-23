<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Categorie extends Model
{
    //
       /**
     * Get the post that owns the comment.
     */
    public function produits()
    {
        return $this->HasMany('App\Produit','idcategorie','id');
    }
}
