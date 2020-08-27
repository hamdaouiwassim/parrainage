<template>
    <main>
        <div class="container-fluid">
            <h1 class="mt-4">Dashboard</h1>
            <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item active">Liste des Commissions</li>
                
            </ol>
            <div class="row p-3">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            
                            <th scope="col">Commission</th>
                            <th scope="col">Gain </th>
                            <th scope="col">Date de reception</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(commission,index) in commissions" :key="index">
                            <th scope="row">{{ index+1 }}</th>
                            <td>{{ commission.type }}</td>
                            <td>{{ findGain(commission.id)   }} </td>
                            <td>{{ commission.created_at | moment("dddd, MMMM Do YYYY")  }}</td>
                           
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
import * as authService from '../../services/auth_service';
import * as CommissionService from '../../services/commission_service';
export default {
    name: "commission",
    data() {
        return {
            commissions : [],
            moreExists : false ,
            nextPage : 0
        };
    },
    mounted(){
        this.loadCommissions();
    },
    methods: {

        loadCommissions : async function (){
                    try {
                        const res = await authService.getProfile();
                        const response = await CommissionService.getUserCommissions(res.data.id);
                        //console.log("response");
                        this.commissions = response.data.data;
                        //console.log(this.achats);
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

 
          findGain(id){
            var commissionName = '';
            this.commissions.forEach(commission => {
               
                if (commission.id == id ){
                    if (commission.type == "Parrainage"){
                            commissionName = commission.prix+" DTT ";
                    }else{
                            commissionName = commission.prix+" Pts";
                    }
                    
                }
            })
            return commissionName;
            
        },
        
       

        loadMore: async function() {
            try {
                const res = await authService.getProfile();
                const response = await CommissionService.loadMore(res.data.id,this.nextPage);
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

