<template>
    <main>
                    <div class="container-fluid">
                        <h1 class="mt-4">Dashboard</h1>
                        <ol class="breadcrumb mb-4">
                            <li class="breadcrumb-item active">Dashboard</li>
                        </ol>


                    
                        <div class="row">
                            <div class="col-xl-3 col-md-6">
                                <div class="card bg-primary text-white mb-4">
                                    <div class="card-body">Nombre des achats</div>
                                    <div class="card-footer d-flex align-items-center justify-content-between">
                                        <a class="small text-white stretched-link" href="#">{{ stats[0] }} Achats</a>
                                        <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6">
                                <div class="card bg-warning text-white mb-4">
                                    <div class="card-body">Nombres des clients</div>
                                    <div class="card-footer d-flex align-items-center justify-content-between">
                                        <a class="small text-white stretched-link" href="#">{{ stats[1] }} Clients</a>
                                        <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6">
                                <div class="card bg-success text-white mb-4">
                                    <div class="card-body">Nombres des comissions</div>
                                    <div class="card-footer d-flex align-items-center justify-content-between">
                                        <a class="small text-white stretched-link" href="#">{{ stats[2] }} Comissions</a>
                                        <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6">
                                <div class="card bg-danger text-white mb-4">
                                    <div class="card-body">Nombres des produits</div>
                                    <div class="card-footer d-flex align-items-center justify-content-between">
                                        <a class="small text-white stretched-link" href="#">{{ stats[3] }} Produits</a>
                                        <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        <button class="btn btn-secondary" v-on:click="Mensuelle">Calculer commission mensuelle</button>
                    </div>
                </main>
            
</template>
<script>
import * as user from '../services/user_service'
import * as dashService from '../services/dashboard'
import * as commService from '../services/commission_service'
export default {
     name: "dashboard",
    data() {
        return {
            stats : {},
           
        };
    },
    mounted(){
        this.GetStat()
    },
    methods :{
   
        GetStat : async function (){
             try {
                const response = await dashService.GetStat();
                this.stats = response.data;
                console.log(this.stats);
            } catch (error) {
                console.log(' '+error,error.response.status)
            }
        },

        Mensuelle: async function (){
               try {
                const response = await commService.getCommissionsMensuelle();
                //this.stats = response.data;
                //console.log(this.stats);
                  this.flashMessage.success({
                            message: 'Mis a jour des commessions Mensuelle',
                            time : 5000
                        });
            } catch (error) {
                console.log(' '+error,error.response.status)
            }
            
        }
      
        


    }
    
}
</script>