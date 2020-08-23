<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Produit extends Model
{
    //
     //
       /**
     * Get the post that owns the comment.
     */
    public function categorie()
    {
        return $this->belongsTo('App\Categorie','idcategorie','id');
    }
}
