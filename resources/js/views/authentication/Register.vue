<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-7">
                <div class="card shadow-lg border-0 rounded-lg mt-5">
                    <div class="card-header">
                        <h3 class="text-center font-weight-light my-4">
                            Creer un compte
                        </h3>
                    </div>
                    <div class="card-body">
                        <form v-on:submit.prevent="register">
                            <div class="form-row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label
                                            class="small mb-1"
                                            for="inputFirstName"
                                            >Nom utilisateur</label
                                        >
                                        <input
                                            class="form-control py-4"
                                            id="name"
                                            v-model="user.name"
                                            type="text"
                                            placeholder="Entrer Nom utilisateur"
                                        />
                                        <div class="invalid-feedback" v-if="errors.name">{{ errors.name[0] }}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label
                                    class="small mb-1"
                                    for="inputEmailAddress"
                                    >Email</label
                                >
                                <input
                                    class="form-control py-4"
                                    id="email"
                                    v-model="user.email"
                                    type="email"
                                    aria-describedby="emailHelp"
                                    placeholder="Entrer votre adresse email"
                                />
                                <div class="invalid-feedback" v-if="errors.email">{{ errors.email[0] }}</div>
                            </div>
                              
                            <div class="form-group">
                                        <label
                                            class="small mb-1"
                                            for="inputConfirmPassword"
                                            >Parrainage Link</label
                                        >
                                        <input
                                            class="form-control py-4"
                                            id="parrainage_link"
                                            type="text"
                                            v-model="user.parrainage_link"
                                            placeholder="Parrainage Link"
                                        />
                                        <div class="invalid-feedback" v-if="errors.parrainage_link">{{ errors.parrainage_link[0] }}</div>
                            </div>
                                
                            <div class="form-row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label
                                            class="small mb-1"
                                            for="inputPassword"
                                            >Mot de passe</label
                                        >
                                        <input
                                            class="form-control py-4"
                                            id="password"
                                            v-model="user.password"
                                            type="password"
                                            placeholder="Entrer Mot de passe"
                                        />
                                        <div class="invalid-feedback" v-if="errors.password">{{ errors.password[0] }}</div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label
                                            class="small mb-1"
                                            for="inputConfirmPassword"
                                            >Repeter mot de passe</label
                                        >
                                        <input
                                            class="form-control py-4"
                                            id="password_confirmation"
                                            type="password"
                                            v-model="user.password_confirmation"
                                            placeholder="Repeter mot de passe"
                                        />
                                    </div>
                                </div>
                            </div>
                              
                            <div class="form-group mt-4 mb-0">
                                <button
                                    type="submit"
                                    class="btn btn-primary btn-block"
                                    
                                >
                                    Enregistrer
                                </button>
                            </div>
                        </form>
                    </div>
                    <div class="card-footer text-center">
                        <div class="small">
                            <router-link to="/login"
                                >Vous avez deja un compte?vers la page de
                                connexion</router-link
                            >
                            <br />
                            <router-link to="/resetpassword"
                                >Mot de passe oublie</router-link
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as auth from '../../services/auth_service';
export default {
    name : 'Register',
    created() {
        document.querySelector("body").style.backgroundColor = "#343a40";
    },
    data(){
        return {
            user : {
                name :'' ,
                email :'' ,
                password :'' ,
                password_confirmation :'' ,
                parrainage_link:'',
            }, 
            errors : {}

        }

        
    },methods :{
        register : async function(){
            try {
                await auth.register(this.user);
                this.errors = {};
                //this.$router.push('/login');
                 this.flashMessage.success({
                            message: 'Inscription faite naviguer vers la page login ...',
                            time : 5000
                        });
            } catch (error) {
                console.log(error);
                switch(error.response.status){
                    case 422 :
                         this.errors = error.response.data.errors;
                         break;
                    case 500 :
                        this.flashMessage.error({
                            message: error.response.data.message,
                            time : 5000
                        });
                         
                         break;
                    case 201 :
                        this.flashMessage.success({
                            message: error.response.data.message,
                            time : 5000
                        });
                        
                         break;
                    default :
                          //alert('somme error');
                          
                        this.flashMessage.error({
                            message: 'un probleme de connexion ...',
                            time : 5000
                        });
                         break;
                }
                
            }
        }
    }
};
</script>
