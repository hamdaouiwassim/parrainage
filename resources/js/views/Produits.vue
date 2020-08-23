<template>
    <main>
        <div class="container-fluid">
            <h1 class="mt-4">Dashboard</h1>
            <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item active">Liste des produits</li>
                <button class="btn btn-primary ml-auto" v-on:click="NewProduitModal">
                    <i class="fa fa-plus"></i> Ajouter un produit
                </button>
            </ol>
            <div class="row p-3">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nom produit</th>
                            <th scope="col">Categorie</th>
                            <th scope="col">Image</th>
                            <th scope="col">Prix </th>
                            <th scope="col">Actions </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(produit,index) in produits" :key="index">
                            <th scope="row">{{ index+1 }}</th>
                            <td>{{ produit.name }}</td>
                            <td>{{ findCategorie(produit.idcategorie) }}</td>
                            <td><img class="w100" :src="`${$store.state.serverPath}/storage/${produit.image}`"></td>
                            <td>{{ produit.price }} DT</td>
                            <td>
                                    <button class="btn btn-success" v-on:click="editProduit(produit)"><i class="fa fa-edit"></i></button>
                                    <button class="btn btn-danger" v-on:click="deleteProduit(produit)"><i class="fa fa-trash"></i></button>
                            </td>
                        </tr>

                        
                       
                    </tbody>
                </table>
                <hr />
                <div class="text-center col-md-12" v-show="moreExists">
                    <button class="btn btn-primary btn-sm" v-on:click="loadMore"><i class="fa fa-arrow-down"></i>Afficher la suite</button>
                </div>
                
            </div>

            <b-modal
                id="modal-1"
                ref="ProduitModal"
                hide-footer
                title="Ajouter un produit"
            >
                <form v-on:submit.prevent="createProduit" >

                     <div class="form-group">
                        <label for="categorie_id">Categorie</label>
                       <select v-model="produitData.categorie_id" name="idcategorie" id="categorie_id" class="form-control">
                            <option> Choisir une categorie </option>
                            <option  v-for="(categorie , index ) in categories" :value="categorie.id" :key="index">{{ categorie.name }}</option>
                       </select>
                        <div class="invalid-feedback" v-if="errors.categorie_id">{{ errors.categorie_id[0] }}</div>
                    </div>
                    <div class="form-group">
                        <label for="name">Nom produit</label>
                        <input
                            type="text"
                            v-model="produitData.name"
                            class="form-control"
                            id="name"
                        />
                        <div class="invalid-feedback" v-if="errors.name">{{ errors.name[0] }}</div>
                    </div>
                    <div class="form-group">
                        <label for="image">Image</label>
                        <div v-if="produitData.image.name" class="imageInForm">
                                <img src="" ref="newProduitImageDisplay" />
                        </div>
                        <input
                            type="file"
                            class="form-control"
                            v-on:change="attachImage"
                            ref="newProduitImage"
                            id="image"
                        />
                        <div class="invalid-feedback" v-if="errors.image">{{ errors.image[0] }}</div>
                    </div>
                    <div class="form-group">
                        <label for="price">Prix produit</label>
                        <input
                            type="number"
                            class="form-control"
                            v-model="produitData.price"
                            id="price"
                        />
                        <div class="invalid-feedback" v-if="errors.price">{{ errors.price[0] }}</div>
                    </div>
                    <hr />
                    <div class="text-right">
                            <b-button
                                type="button"
                                class="btn btn-primary"
                                v-on:click="hideNewProduitModal"
                                >Reset</b-button
                            >
                            <b-button
                                type="submit"
                                class="btn btn-primary"
                                v-on:click="NewProduitModal"
                                ><span class="fa fa-check"></span> Enregistrer
                            </b-button>
                    </div>
                    
                </form>
            </b-modal>



            <b-modal
                id="modal-2"
                ref="editProduitModal"
                hide-footer
                title="Modifier produit"
            >
                <form v-on:submit.prevent="updateProduit" >
                <div class="form-group">
                        <label for="categorie_id">Categorie</label>
                       <select v-model="editproduitData.categorie_id" name="idcategorie" id="categorie_id" class="form-control">
                            <option> Choisir une categorie </option>
                            <option  v-for="(categorie , index ) in categories" :value="categorie.id" :key="index">{{ categorie.name }}</option>
                       </select>
                        <div class="invalid-feedback" v-if="errors.categorie_id">{{ errors.categorie_id[0] }}</div>
                    </div>
                    <div class="form-group">
                        <label for="name">Nom produit</label>
                        <input
                            type="text"
                            v-model="editproduitData.name"
                            class="form-control"
                            id="name"
                        />
                        <div class="invalid-feedback" v-if="errors.name">{{ errors.name[0] }}</div>
                    </div>
                    <div class="form-group">
                        <label for="image">Image</label>
                        <div  class="imageInForm">
                                <img :src="`${$store.state.serverPath}/storage/${editproduitData.image}`" ref="editProduitImageDisplay" />
                        </div>
                        <input
                            type="file"
                            class="form-control"
                            v-on:change="editAttachImage"
                            ref="editProduitImage"
                            id="image"
                        />
                        <div class="invalid-feedback" v-if="errors.image">{{ errors.image[0] }}</div>
                    </div>
                    <div class="form-group">
                        <label for="price">Prix produit</label>
                        <input
                            type="number"
                            class="form-control"
                            v-model="editproduitData.price"
                            id="price"
                        />
                        <div class="invalid-feedback" v-if="errors.price">{{ errors.price[0] }}</div>
                    </div>
                    <hr />
                    <div class="text-right">
                            <b-button
                                type="button"
                                class="btn btn-primary"
                                v-on:click="hideEditProduitModal"
                                >Reset</b-button
                            >
                            <b-button
                                type="submit"
                                class="btn btn-primary"
                                 
                                ><span class="fa fa-check"></span> Modifier
                            </b-button>
                    </div>
                    
                </form>
            </b-modal>
        </div>
    </main>
</template>

<script>

import * as ProduitsService from '../services/produit_service';
export default {
    name: "produit",
    data() {
        return {
            categories : [],
            produits : [],
            produitData: {
                categorie_id : "",
                name: "",
                image: "",
                price: " "
            },
            editproduitData: {},
            errors : {},
            moreExists : false ,
            nextPage : 0
        };
    },
    mounted(){
        this.loadCategories();
        this.loadProduits();
    },
    methods: {
        deleteProduit : async function(produit){
                if( window.confirm(`Voulez-vous vraiment supprimer  produit ${produit.name} ?`) ){
                     try {
                            const response = await ProduitsService.deleteProduit(produit.id);
                            //console.log(response);
                            this.produits = this.produits.filter(obj => {
                                return obj.id != produit.id

                            }) 
                             this.flashMessage.success({
                                message: 'Produit supprimer avec succes ...',
                                time : 5000
                            });
                        } catch (error) {
                            console.log(error);
                            
                        }
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
        loadProduits : async function (){
                    try {
                        const response = await ProduitsService.getAllproduits();
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
                            message: 'Erreur de chargements des produits ...',
                            time : 5000
                        });
                        
                    }
        },
        attachImage() {
            // to use file reader
           this.produitData.image =  this.$refs.newProduitImage.files[0];
           let reader = new FileReader();
           reader.addEventListener('load',function(){
               this.$refs.newProduitImageDisplay.src = reader.result;

           }.bind(this),false);
           reader.readAsDataURL(this.produitData.image);
        },
        hideNewProduitModal() {
            this.$refs.ProduitModal.hide();
        },
        NewProduitModal() {
            this.$refs.ProduitModal.show();
        },
        createProduit:async function() {
            //console.log("form submitted");
            let formData = new FormData();
            formData.append('categorie_id', this.produitData.categorie_id);
            formData.append('name', this.produitData.name)
            formData.append('image', this.produitData.image)
            formData.append('price', this.produitData.price)

            try{
                const response = await ProduitsService.createProduit(formData);
                //console.log(response);
                this.produits.unshift(response.data);
                 this.hideNewProduitModal();
                this.flashMessage.success({
                    message: 'Produit Ajouter avec succes ...',
                    time : 5000
                });
                   this.produitData={
                categorie_id:"",
                name: "",
                image: "",
                price: " "
            };
             
            }catch(error){
                //console.log(error.response.status);
                 //
                switch(error.response.status){
                    case 422 :
                         this.errors = error.response.data.errors;
                         break;
                    default :
                          //alert('somme error');
                          this.hideNewProduitModal();
                        this.flashMessage.error({
                            message: 'un probleme d\'ajout ...',
                            time : 5000
                        });
                         break;
                }
                //alert('error ya bro');

            }
            
            


        },
        hideEditProduitModal(){
                this.$refs.editProduitModal.hide();
        },
        showEditProduitModal(){
                this.$refs.editProduitModal.show();
        },
        editProduit(produit){
                this.editproduitData = {...produit};
                this.showEditProduitModal();
        },
        editAttachImage(){
            // to use file reader
           this.editproduitData.image =  this.$refs.editProduitImage.files[0];
           let reader = new FileReader();
           reader.addEventListener('load',function(){
               this.$refs.editProduitImageDisplay.src = reader.result;

           }.bind(this),false);
           reader.readAsDataURL(this.editproduitData.image);

        },
        updateProduit : async function (){
            console.log("update");
            const formData = new FormData();
            formData.append('categorie_id', this.editproduitData.categorie_id);
            formData.append('name', this.editproduitData.name)
            formData.append('image', this.editproduitData.image)
            formData.append('price', this.editproduitData.price)
            formData.append('_method',"put");
            try {
                const response = await ProduitsService.updateProduit(this.editproduitData.id , formData);
                //console.log(response);
                this.produits.map(produit =>{
                    if (produit.id == response.data.id ){

                        for(let key in response.data ){
                            produit[key] = response.data[key];
                        }
                       // produit = response.data;
                    }
                });
                this.hideEditProduitModal();
                 this.flashMessage.success({
                            message: "produit modifiee avec succes",
                            time : 5000
                });
                


                
            } catch (error) {
                this.flashMessage.error({
                            message:error.response.data.message,
                            time : 5000
                        });
                console.log(error);
                
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

        }
    }
};
</script>

