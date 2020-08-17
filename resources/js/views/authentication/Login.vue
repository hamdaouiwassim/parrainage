<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-5">
                <div class="card shadow-lg border-0 rounded-lg mt-5">
                    <div class="card-header">
                        <h3 class="text-center font-weight-light my-4">
                            Connexion
                        </h3>
                    </div>
                    <div class="card-body">
                  
                        <form v-on:submit.prevent="login">
                            <div class="form-group">
                                <label
                                    class="small mb-1"
                                    for="inputEmailAddress"
                                    >Email</label
                                >
                                <input
                                    class="form-control py-4"
                                    v-model="user.email"
                                    id="inputEmailAddress"
                                    type="email"
                                    placeholder="Enter email address"
                                />
                                <div class="invalid-feedback" v-if="errors.email">{{ errors.email[0] }}</div>
                            </div>
                            <div class="form-group">
                                <label class="small mb-1" for="inputPassword"
                                    >Mot de passe</label
                                >
                                <input
                                    class="form-control py-4"
                                    id="inputPassword"
                                    v-model="user.password"
                                    type="password"
                                    placeholder="Enter password"
                                />
                                <div class="invalid-feedback" v-if="errors.password">{{ errors.password[0] }}</div>
                            </div>
                            <div class="form-group">
                                <div class="custom-control custom-checkbox">
                                    <input
                                        class="custom-control-input"
                                        id="rememberPasswordCheck"
                                        v-model="user.remember_me"
                                        type="checkbox"
                                    />
                                    <label
                                        class="custom-control-label"
                                        for="rememberPasswordCheck"
                                        >Remember password</label
                                    >
                                </div>
                            </div>
                            <div
                                class="form-group d-flex align-items-center justify-content-between mt-4 mb-0"
                            >
                                <router-link class="small" to="/resetpassword"
                                    >Mot de passe oublie?</router-link
                                >
                                <button type="submit" class="btn btn-primary" 
                                    >Connecter</button
                                >
                            </div>
                        </form>
                    </div>
                    <div class="card-footer text-center">
                        <div class="small">
                            <router-link to="/register"
                                >Je suis pas inscrit , je veut creer un
                                compte</router-link
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

    name: "Login",
    created() {
        document.querySelector("body").style.backgroundColor = "#343a40";
    },
    data() {
        return {
            user: {
                email: "",
                password: "",
                remember_me: "",
            },errors : {}
        };
    },
    methods : {
        login : async function(){
            try {
                const responce = await auth.login(this.user)
                //console.log(responce);
                this.$router.push('/home');
                
            } catch (error) {

                console.log(error);
                switch(error.response.status){
                    case 422 :
                         this.errors = error.response.data.errors;
                         break;
                    case 401 :
                          this.flashMessage.error({
                            message: error.response.data.message,
                            time : 5000
                        });
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
                } // end switch
                
            
                
            }
        }
    }
};
</script>
