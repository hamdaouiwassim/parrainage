<template>
    <main>
        <div class="container-fluid">
                <h2 class="mt-4">Liste des produits</h2>
                <hr />
            <div class="row col-md-12">
                    <div class="col-md-4" v-for="(produit,index) in produits" :key="index" >
                            <div class="card" style="width: 18rem;">
                                    <img class="card-img-top" style="max-height:200px !important"  :src="`${$store.state.serverPath}/storage/${produit.image}`" alt="Card image cap">
                                    <div class="card-body">
                                        <h5 class="card-title">{{ produit.name }}</h5>
                                        
                                        <h6>{{ produit.price  }} DTT</h6>
                                        <hr />
                                        <a v-on:click="buyProduct(produit)" class="btn btn-success">Acheter</a>
                                    </div>
                        </div>
                    </div>
            
            </div>
            <div class="text-center col-md-12" v-show="moreExists">
                    <button class="btn btn-primary btn-sm" v-on:click="loadMore"><i class="fa fa-arrow-down"></i>Afficher la suite</button>
            </div>
                

        </div>
    </main>
</template>
<script>

import * as ProduitsService from '../../services/produit_service';
import * as AchatService from '../../services/achat_service';
import * as authService from '../../services/auth_service';
export default {
    name: "produit",
     data() {
        return {
            categories : [],
            produits : [],
            moreExists : false ,
            nextPage : 0
            };
    },
    mounted(){
        this.loadCategories();
        this.loadProduits();
    },
    methods: {
        loadProduits : async function (){
                    try {
                        const response = await ProduitsService.getAllproduits();
                        console.log(response);
                        this.produits = response.data.data;
                          if (response.data.current_page < response.data.last_page ){
                                            this.moreExists = true;
                                            this.nextPage = response.data.current_page + 1;
                        }else{
                                            this.moreExists = false;
                        }
                      
                    } catch (error) {
                         this.flashMessage.error({
                            message: 'Erreur de chargements des produits ...',
                            time : 5000
                        });
                        
                    }
        },
        loadCategories : async function (){
                    try {
                        const response = await ProduitsService.loadCategories();
                        //console.log(response);
                        this.categories = response.data;
                       
                      
                    } catch (error) {
                         this.flashMessage.error({
                            message: 'Erreur de chargements des categories ...',
                            time : 5000
                        });
                        
                    }
        },
        findCategorie(id){
                        var categorieName = '';
                        this.categories.forEach(categorie => {
                        
                            if (categorie.id == id ){
                                categorieName = categorie.name;
                            }
                        })
                        return categorieName;
                        
                    },
        loadMore: async function() {
            try {
                const response = await ProduitsService.loadMore(this.nextPage);
                console.log(response);
                  if (response.data.current_page < response.data.last_page ){
                                            
                                            this.moreExists = true;
                                            this.nextPage = response.data.current_page + 1;
                        }else{
                                            this.moreExists = false;
                        }

                response.data.data.forEach(
                    data => {
                        this.produits.push(data);
                    }
                )

            } catch (error) {
                this.flashMessage.error({
                            message:"erreur de chargement des produits",
                            time : 5000
                        });
                
            }

            }, // end loadmore
            buyProduct: async function(produit) {
                    try {
                        const res = await authService.getProfile();
                        console.log("Achat du produit");
                        console.log(res.data.id);
                        console.log(produit);
                         let formData = new FormData();
                            formData.append('idproduit', produit.id);
                            formData.append('iduser', res.data.id)
                        const response = await AchatService.BuyProduct(formData);
                        this.flashMessage.success({
                            message: 'Achat avec succes ...',
                            time : 5000
                        });
                        
                        
                    } catch (error) {
                        this.flashMessage.error({
                            message:"erreur d'achat du produit",
                            time : 5000
                        });
                    }

            }
    
    }
    
}
</script>