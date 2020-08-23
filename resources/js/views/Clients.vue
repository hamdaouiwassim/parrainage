<template>
    <main>
        <div class="container-fluid">
            <h1 class="mt-4">Dashboard</h1>
            <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item active">Liste des clients</li>
                
            </ol>
            <div class="row p-3">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nom </th>
                            <th scope="col">Email</th>
                            <th scope="col">Date d'inscription</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(client,index) in clients" :key="index">
                            <th scope="row">{{ index+1 }}</th>
                            <td>{{ client.name }}</td>
                            <td>{{ client.email  }}</td>
                            <td>{{ client.created_at | moment("dddd, MMMM Do YYYY")  }}</td>
                           
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

import * as ClientsService from '../services/client_service';
export default {
    name: "client",
    data() {
        return {
            clients : [],
            moreExists : false ,
            nextPage : 0
        };
    },
    mounted(){
     
        this.loadClients();
    },
    methods: {

        loadClients : async function (){
                    try {
                        const response = await ClientsService.getAllclients();
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
                            message: 'Erreur de chargements des clients ...',
                            time : 5000
                        });
                        
                    }
        },
        
       
        
        
      
    
        loadMore: async function() {
            try {
                const response = await ClientsService.loadMore(this.nextPage);
                console.log(response);
                  if (response.data.current_page < response.data.last_page ){
                                            
                                            this.moreExists = true;
                                            this.nextPage = response.data.current_page + 1;
                        }else{
                                            this.moreExists = false;
                        }

                response.data.data.forEach(
                    data => {
                        this.clients.push(data);
                    }
                )

            } catch (error) {
                this.flashMessage.error({
                            message:"erreur de chargement des clients",
                            time : 5000
                        });
                
            }

        }
    }
};
</script>

