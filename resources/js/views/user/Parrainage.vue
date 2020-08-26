<template>
    <main>
            <div class="container-fluid">
                <h2 class="mt-4">Parrainage directes</h2>
                <hr />
                 <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Client </th>
                            <th scope="col">Email </th>
                            <th scope="col">Date d'inscription </th>
                            
                           
                           
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(parrainage,index) in parrainages" :key="index">
                            <th scope="row">{{ index+1 }}</th>
                            <td>{{ findUser(parrainage.client) }}</td>
                            <td>{{ findUserEmail(parrainage.client) }}</td>
                            <td>{{ findUserDate(parrainage.client) | moment("dddd, MMMM Do YYYY") }}</td>
                            
                            
                            
                        </tr>

                        
                       
                    </tbody>
                </table>
                
               
            </div>

            
    </main>
</template>
<script>
import * as authService from '../../services/auth_service';
import * as ParrainageService from '../../services/parrainage_service';

export default {
     name: "parrainage",
      data() {
        return {
            
            parrainages : [],
            clients : {},
         
        };
    },
    mounted(){
        this.loadusers();
        this.loadParrainages();
        
    },
    methods: {  
        
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
        loadParrainages : async function(){
               try {
                        
                        const res = await authService.getProfile();
                        const response = await ParrainageService.getParrainageDirectes(res.data.id);
                        //console.log(response);
                        this.parrainages = response.data;
                       
                      
                    } catch (error) {
                         this.flashMessage.error({
                            message: 'Erreur de chargements des parrainages ...',
                            time : 5000
                        });
                        
                    }

        },
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
            findUserEmail(id){
            //console.log(this.users);
            var userName = '';
            this.clients.forEach(user => {
               
                if (user.id == id ){
                    userName = user.email;
                }
            })
            return userName;
            
            },
            findUserDate(id){
            //console.log(this.users);
            var userName = '';
            this.clients.forEach(user => {
               
                if (user.id == id ){
                    userName = user.created_at;
                }
            })
            return userName;
            
            },
    }
    
}
</script>