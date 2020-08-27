<template>
    <main>
            <div class="col-md-12">
                        <h2 class="m-4">Votre Arbre de parrainage</h2>
                       
                        
                        <hr />
                        <div class="col-md-12 text-center mt-4">
                            
                            <button class="btn btn-primary"> {{ $store.state.profile.name }} </button>
                        </div>
                        <hr />
                        <h6>Niveau 1</h6>
                        <hr />
                        <div class="row col-md-12 text-center" v-if="niveau1.length > 0" >
                        
                        
                                <div class="col-md-6" v-for="(nv,index) in niveau1" :key="index"> 
                                    <button class="btn btn-secondary"> {{ findUser(nv) }} </button>
                                 </div>
                                
                        </div>
                        <hr />
                        <h6>Niveau 2</h6>
                        <hr />
                        <div class="row col-md-12 text-center" v-if="niveau2.length > 0" >
                          
                           
                                <div class="col-md-3" v-for="(nv,index) in niveau2" :key="index"> 
                                    <button class="btn btn-success"> {{ findUser(nv) }} </button>
                                 </div>
                                
                        </div>
                        <hr />
                        <h6>Niveau 3</h6>
                        <hr />
                        <div class="row col-md-8 offset-2 text-center" v-if="niveau3.length > 0" >
                        
                         
                                <div class="col-md-1" v-for="(nv,index) in niveau1" :key="index"> 
                                    <button class="btn btn-danger"> {{ findUser(nv) }} </button>
                                 </div>
                                
                        </div>
                         <hr />
                        <h6>Niveau 4</h6>
                        <hr />
                        <div class="row col-md-12 text-center" v-if="niveau4.length > 0" >
                        
                         
                                <div class="col-md-1" v-for="(nv,index) in niveau4" :key="index"> 
                                    <button class="btn btn-danger"> {{ findUser(nv) }} </button>
                                 </div>
                                
                        </div>
            
            </div>

    </main>
</template>
<script>
import * as authService from '../../services/auth_service';
import * as ParrainageService from '../../services/parrainage_service';
export default {
     name: "arbre",
    data() {
        return {
        clients : {},
         arbres : [],
         niveau1 : [] ,
         niveau2 : [] ,
         niveau3 : [] ,
         niveau4 : [] ,
         
        };
    },
    mounted(){
        this.loadusers();
        this.loadarbre();
        
    },
    methods: {
         findUser(id){
            //console.log(this.users);
            var userName = '';
            this.clients.forEach(user => {
               
                if (user.id == id ){
                    userName = user.name;
                }
            })
            return userName;
            
            },
         loadusers : async function(){
               try {
                        /*const response1 = await ParrainageService.getarbre(31);
                        console.log(response1.data);*/
                        const response = await ParrainageService.getusers();
                        this.clients = response.data;
                    } catch (error) {
                         this.flashMessage.error({
                            message: 'Erreur de chargements des users ...',
                            time : 5000
                        });
                        
                    }

        },
          loadarbre : async function(){
               try {
                        const res = await authService.getProfile();
                        const response = await ParrainageService.getarbre(res.data.id);
                        this.arbres = response.data;
                        if ( this.arbres.length == 4 ){
                            this.niveau4 = this.arbres[3];
                            this.niveau3 = this.arbres[2];
                            this.niveau2 = this.arbres[1];
                            this.niveau1 = this.arbres[0];
                            //console.log(this.niveau3);

                        }else if ( this.arbres.length == 3 ) {
                            this.niveau3 = this.arbres[2];
                            this.niveau2 = this.arbres[1];
                            this.niveau1 = this.arbres[0];
                            //console.log(this.arbres);
                        }
                        else if ( this.arbres.length == 2 ) {
                            this.niveau2 = this.arbres[1];
                            this.niveau1 = this.arbres[0];
                            //console.log(this.arbres);
                        }else if ( this.arbres.length == 1 ) {
                            this.niveau1 = this.arbres[0];
                            //console.log(this.niveau1);
                        }
                        
                    } catch (error) {
                         this.flashMessage.error({
                            message: 'Erreur de chargements des arbres ...',
                            time : 5000
                        });
                        
                    }

        }, // end load arbre

    } 
}
</script>