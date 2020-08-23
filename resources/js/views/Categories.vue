<template>
    <main>
        <div class="container-fluid">
            <h1 class="mt-4">Dashboard</h1>
            <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item active">Liste des categories</li>
                <button class="btn btn-primary ml-auto" v-on:click="NewCategorieModal">
                    <i class="fa fa-plus"></i> Ajouter un categorie
                </button>
            </ol>
            <div class="row p-3">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nom categorie</th>
                            <th scope="col">Description</th>
                           
                            <th scope="col">Actions </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(categorie,index) in categories" :key="index">
                            <th scope="row">{{ index+1 }}</th>
                            <td>{{ categorie.name }}</td>
                            <td>{{ categorie.description }}</td>
                            
                            <td>
                                    <button class="btn btn-success" v-on:click="editCategorie(categorie)"><i class="fa fa-edit"></i></button>
                                    <button class="btn btn-danger" v-on:click="deleteCategorie(categorie)"><i class="fa fa-trash"></i></button>
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
                ref="CategorieModal"
                hide-footer
                title="Ajouter un categorie"
            >
                <form v-on:submit.prevent="createCategorie" >
                    <div class="form-group">
                        <label for="name">Nom categorie</label>
                        <input
                            type="text"
                            v-model="categorieData.name"
                            class="form-control"
                            id="name"
                        />
                        <div class="invalid-feedback" v-if="errors.name">{{ errors.name[0] }}</div>
                    </div>
                    <div class="form-group">
                        <label for="description">Description</label>
                        
                        <textarea
                            
                            class="form-control"
                            v-model="categorieData.description"
                            
                            id="description"
                        ></textarea>
                        <div class="invalid-feedback" v-if="errors.description">{{ errors.description[0] }}</div>
                    </div>
                    
                    <hr />
                    <div class="text-right">
                            <b-button
                                type="button"
                                class="btn btn-primary"
                                v-on:click="hideNewCategorieModal"
                                >Reset</b-button
                            >
                            <b-button
                                type="submit"
                                class="btn btn-primary"
                                v-on:click="NewCategorieModal"
                                ><span class="fa fa-check"></span> Enregistrer
                            </b-button>
                    </div>
                    
                </form>
            </b-modal>



            <b-modal
                id="modal-2"
                ref="editCategorieModal"
                hide-footer
                title="Modifier categorie"
            >
                <form v-on:submit.prevent="updateCategorie" >
                    <div class="form-group">
                        <label for="name">Nom categorie</label>
                        <input
                            type="text"
                            v-model="editcategorieData.name"
                            class="form-control"
                            id="name"
                        />
                        <div class="invalid-feedback" v-if="errors.name">{{ errors.name[0] }}</div>
                    </div>
                     <div class="form-group">
                        <label for="description">Description</label>
                        
                        <textarea
                            
                            class="form-control"
                            v-model="editcategorieData.description"
                            
                            id="description"
                        ></textarea>
                        <div class="invalid-feedback" v-if="errors.description">{{ errors.description[0] }}</div>
                    </div>
                    <hr />
                    <div class="text-right">
                            <b-button
                                type="button"
                                class="btn btn-primary"
                                v-on:click="hideEditCategorieModal"
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

import * as CategoriesService from '../services/categorie_service';
export default {
    name: "categorie",
    data() {
        return {
            categories : [],
            categorieData: {
                name: "",
                description: ""
                
            },
            editcategorieData: {},
            errors : {},
            moreExists : false ,
            nextPage : 0
        };
    },
    mounted(){
        this.loadCategories();
    },
    methods: {
        deleteCategorie : async function(categorie){
                if( window.confirm(`Voulez-vous vraiment supprimer  categorie ${categorie.name} ?`) ){
                     try {
                            const response = await CategoriesService.deleteCategorie(categorie.id);
                            //console.log(response);
                            this.categories = this.categories.filter(obj => {
                                return obj.id != categorie.id

                            }) 
                             this.flashMessage.success({
                                message: 'Categorie supprimer avec succes ...',
                                time : 5000
                            });
                        } catch (error) {
                            console.log(error);
                            
                        }
                }
               
        },
        loadCategories : async function (){
                    try {
                        const response = await CategoriesService.getAllcategories();
                        //console.log(response);
                        this.categories = response.data.data;
                          if (response.data.current_page < response.data.last_page ){
                                            this.moreExists = true;
                                            this.nextPage = response.data.current_page + 1;
                        }else{
                                            this.moreExists = false;
                        }
                      
                    } catch (error) {
                         this.flashMessage.error({
                            message: 'Erreur de chargements des categories ...',
                            time : 5000
                        });
                        
                    }
        },
        attachImage() {
            // to use file reader
           this.categorieData.image =  this.$refs.newCategorieImage.files[0];
           let reader = new FileReader();
           reader.addEventListener('load',function(){
               this.$refs.newCategorieImageDisplay.src = reader.result;

           }.bind(this),false);
           reader.readAsDataURL(this.categorieData.image);
        },
        hideNewCategorieModal() {
            this.$refs.CategorieModal.hide();
        },
        NewCategorieModal() {
            this.$refs.CategorieModal.show();
        },
        createCategorie:async function() {
            //console.log("form submitted");
            let formData = new FormData();
            formData.append('name', this.categorieData.name)
            formData.append('description', this.categorieData.description)
            

            try{
                const response = await CategoriesService.createCategorie(formData);
                //console.log(response);
                this.categories.unshift(response.data);
                 this.hideNewCategorieModal();
                this.flashMessage.success({
                    message: 'Categorie Ajouter avec succes ...',
                    time : 5000
                });
                   this.categorieData={
                name: "",
                description: ""
                
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
                          this.hideNewCategorieModal();
                        this.flashMessage.error({
                            message: 'un probleme d\'ajout ...',
                            time : 5000
                        });
                         break;
                }
                //alert('error ya bro');

            }
            
            


        },
        hideEditCategorieModal(){
                this.$refs.editCategorieModal.hide();
        },
        showEditCategorieModal(){
                this.$refs.editCategorieModal.show();
        },
        editCategorie(categorie){
                this.editcategorieData = {...categorie};
                this.showEditCategorieModal();
        },
        editAttachImage(){
            // to use file reader
           this.editcategorieData.image =  this.$refs.editCategorieImage.files[0];
           let reader = new FileReader();
           reader.addEventListener('load',function(){
               this.$refs.editCategorieImageDisplay.src = reader.result;

           }.bind(this),false);
           reader.readAsDataURL(this.editcategorieData.image);

        },
        updateCategorie : async function (){
            console.log("update");
            const formData = new FormData();
            formData.append('name', this.editcategorieData.name)
            formData.append('description', this.editcategorieData.description)
           
            formData.append('_method',"put");
            try {
                const response = await CategoriesService.updateCategorie(this.editcategorieData.id , formData);
                //console.log(response);
                this.categories.map(categorie =>{
                    if (categorie.id == response.data.id ){

                        for(let key in response.data ){
                            categorie[key] = response.data[key];
                        }
                       // categorie = response.data;
                    }
                });
                this.hideEditCategorieModal();
                 this.flashMessage.success({
                            message: "categorie modifiee avec succes",
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
        loadMore: async function() {
            try {
                const response = await CategoriesService.loadMore(this.nextPage);
                console.log(response);
                  if (response.data.current_page < response.data.last_page ){
                                            
                                            this.moreExists = true;
                                            this.nextPage = response.data.current_page + 1;
                        }else{
                                            this.moreExists = false;
                        }

                response.data.data.forEach(
                    data => {
                        this.categories.push(data);
                    }
                )

            } catch (error) {
                this.flashMessage.error({
                            message:"erreur de chargement des categories",
                            time : 5000
                        });
                
            }

        }
    }
};
</script>

