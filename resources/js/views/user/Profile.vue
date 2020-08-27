<template>
    <main>
    <div class="container-fluid">
            <div class="m-5">
            <h5> Solde des points :  </h5>  <button class="btn btn-warning"> {{ calculSoldePts() }} Pts </button>
            <hr />
            <h5> Solde d'argents :  </h5> <button class="btn btn-warning"> {{ calculSoldeArgents() }} DTT </button>
            </div>
            <div class="card m-5">
                    <div class="card-header">
                            <h3> Informations du compte </h3>
                    </div>
                    
                   <div class="card-body">
                        <h4>Nom :  <span class="text-primary">{{ $store.state.profile.name }}</span> </h4>
                        <hr /> 
                        <h4>Email :  <span class="text-primary">{{ $store.state.profile.email }}</span> </h4>
                         <hr /> 
                        <h4>Lien le parrainage :  <span class="text-primary">{{ $store.state.profile.parrainage_link }}</span> </h4>
                        <hr /> 
                        <h4>Date d'inscription :  <span class="text-primary">{{ $store.state.profile.created_at | moment("YYYY-MM-DD") }}</span> </h4>
                        <hr />
                        <h4> Mon Parrain : <span class="text-primary">{{ findPere(parrainage[0].parrain) }} </span>   </h4>
                        <hr />
                        <h4> Mon Pere :  <span class="text-primary">{{ findPere(parrainage[0].pere) }} </span>  </h4>

                   </div>
                    
            </div>
            
    </div>
            

    </main>
</template>
<script>
import * as authService from '../../services/auth_service';
import * as CommissionService from '../../services/commission_service';
import * as ParrainageService from '../../services/parrainage_service';
export default {
       name: "commission",
    data() {
        return {
            commissions : [],
            parrainage : [],
            users : {} ,
           
            
        };
    },
    mounted(){
        this.loadCommissions();
    },
    methods: {
                  loadCommissions : async function (){
                    try {
                        const res = await authService.getProfile();
                        const response = await CommissionService.getUserCommissionsAll(res.data.id);
                        const response1 = await ParrainageService.getParrainage(res.data.id);
                        const response2 = await authService.UsersAll();
                        this.users = response2.data;
                        console.log("users");
                        console.log(this.users);
                        this.commissions = response.data;
                        this.parrainage = response1.data;
                        console.log(this.parrainage);
                        
                      
                    } catch (error) {
                         this.flashMessage.error({
                            message: 'Erreur de chargements des commissions ...',
                            time : 5000
                        });
                        
                    }
            },
            calculSoldePts(){
                 let solde = 0;
                this.commissions.forEach(commission => {
                   
       
                    if (commission.type == "Reseau"){
                             solde += commission.prix;
                    }
                    
         
                
            })
            return solde;
            },
             calculSoldeArgents(){
                 let solde = 0;
                this.commissions.forEach(commission => {
                    
  
                    if (commission.type == "Parrainage"){
                             solde += commission.prix;
                    }
                    
             
            })
            return solde;
            },
            findPere(id){
                        var userName = '';
                        this.users.forEach(user => {
                        
                            if (user.id == id ){
                                userName = user.name;
                            }
                        })
                        return userName;
                        
            },
                       
            
    }
}
</script>>