<template>
    <main>
        <div class="container-fluid">
            <h1 class="mt-4">Dashboard</h1>
            <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item active">Liste des Achats</li>
                
            </ol>
            <div class="row p-3">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Client </th>
                            <th scope="col">Produit</th>
                            <th scope="col">Date d'achat</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(achat,index) in achats" :key="index">
                            <th scope="row">{{ index+1 }}</th>
                            <td>{{ findClient(achat.idclient) }}</td>
                            <td>{{ findProduit(achat.idproduit)  }}</td>
                            <td>{{ achat.created_at | moment("dddd, MMMM Do YYYY")  }}</td>
                           
                        </tr>
                    </tbody>
                </table>
                <hr />
                <div class="text-center col-md-12" v-show="moreExists">
                    <button class="btn btn-primary btn-sm" v-on:click="loadMore"><i class="fa fa-arrow-down"></i>Afficher la suite</button>
                </div>
                
            </div>
        </div>
    </main>
</template>

<script>

import * as AchatsService from '../services/achat_service';
export default {
    name: "achat",
    data() {
        return {
            achats : [],
            categories : [],
            produits : [],
            moreExists : false ,
            nextPage : 0
        };
    },
    mounted(){
        this.loadClients();
        this.loadProduits();
        this.loadAchats();
    },
    methods: {

        loadAchats : async function (){
                    try {
                        const response = await AchatsService.getAllachats();
                        //console.log(response);
                        this.achats = response.data.data;
                          if (response.data.current_page < response.data.last_page ){
                                            this.moreExists = true;
                                            this.nextPage = response.data.current_page + 1;
                        }else{
                                            this.moreExists = false;
                        }
                      
                    } catch (error) {
                         this.flashMessage.error({
                            message: 'Erreur de chargements des achats ...',
                            time : 5000
                        });
                        
                    }
        },
        loadClients : async function (){
                    try {
                        const response = await AchatsService.getAllclients();
                        //console.log(response);
                        this.clients = response.data.data;
                          if (response.data.current_page < response.data.last_page ){
                                            this.moreExists = true;
                                            this.nextPage = response.data.current_page + 1;
                        }else{
                                            this.moreExists = false;
                        }
                      
                    } catch (error) {
                         this.flashMessage.error({
                            message: 'Erreur de chargements des achats ...',
                            time : 5000
                        });
                        
                    }
        },
        loadProduits : async function (){
                    try {
                        const response = await AchatsService.getAllproduits();
                        //console.log(response);
                        this.produits = response.data.data;
                          if (response.data.current_page < response.data.last_page ){
                                            this.moreExists = true;
                                            this.nextPage = response.data.current_page + 1;
                        }else{
                                            this.moreExists = false;
                        }
                      
                    } catch (error) {
                         this.flashMessage.error({
                            message: 'Erreur de chargements des achats ...',
                            time : 5000
                        });
                        
                    }
        },
          findClient(id){
            var clientName = '';
            this.clients.forEach(client => {
               
                if (client.id == id ){
                    clientName = client.name;
                }
            })
            return clientName;
            
        },
          findProduit(id){
            var produitName = '';
            this.produits.forEach(produit => {
               
                if (produit.id == id ){
                    produitName = produit.name;
                }
            })
            return produitName;
            
        },
        
       
        
        
      
    
        loadMore: async function() {
            try {
                const response = await AchatsService.loadMore(this.nextPage);
                console.log(response);
                  if (response.data.current_page < response.data.last_page ){
                                            
                                            this.moreExists = true;
                                            this.nextPage = response.data.current_page + 1;
                        }else{
                                            this.moreExists = false;
                        }

                response.data.data.forEach(
                    data => {
                        this.achats.push(data);
                    }
                )

            } catch (error) {
                this.flashMessage.error({
                            message:"erreur de chargement des achats",
                            time : 5000
                        });
                
            }

        }
    }
};
</script>

