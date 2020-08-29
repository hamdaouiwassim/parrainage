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
                            <th scope="col">Client</th>
                            <th scope="col">Commission</th>
                            <th scope="col">Gain </th>
                            <th scope="col">Date de reception</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(commission,index) in commissions" :key="index">
                            <th scope="row">{{ index+1 }}</th>
                            <td>{{ findUser(commission.idbeneficiaire) }}</td>
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
import * as authService from '../services/auth_service';
import * as CommissionService from '../services/commission_service';
export default {
    name: "commission",
    data() {
        return {
            users : [],
            commissions : [],
            moreExists : false ,
            nextPage : 0
        };
    },
    mounted(){
        this.loadCommissions();
        this.loadUsers();
    },
    methods: {
         loadUsers : async function (){
                    try {
                        
                        const response = await authService.UsersAll();
                        console.log(response);
                        this.users = response.data;
                        //console.log(this.achats);   
                    } catch (error) {
                         this.flashMessage.error({
                            message: 'Erreur de chargements des users ...',
                            time : 5000
                        });
                        
                    }
        },

        loadCommissions : async function (){
                    try {
                        
                        const response = await CommissionService.getCommissionsAll();
                        console.log(response);
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
            findUser(id){
            //console.log(this.users);
            var userName = '';
            this.users.forEach(user => {
               
                if (user.id == id ){
                    userName = user.name;
                }
            })
            return userName;
            
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
                const response = await CommissionService.loadMore(this.nextPage);
                console.log(response);
                  if (response.data.current_page < response.data.last_page ){
                                            
                                            this.moreExists = true;
                                            this.nextPage = response.data.current_page + 1;
                        }else{
                                            this.moreExists = false;
                        }

                response.data.data.forEach(
                    data => {
                        this.commissions.push(data);
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

