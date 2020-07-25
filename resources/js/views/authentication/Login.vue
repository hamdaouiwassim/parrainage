<template>
    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-5">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Connexion</h3></div>
                                    <div class="card-body">
                                        <form>
                                            <div class="form-group">
                                                <label class="small mb-1" for="inputEmailAddress">Email</label>
                                                <input class="form-control py-4" id="inputEmailAddress" type="email" placeholder="Enter email address" />
                                            </div>
                                            <div class="form-group">
                                                <label class="small mb-1" for="inputPassword">Mot de passe</label>
                                                <input class="form-control py-4" id="inputPassword" type="password" placeholder="Enter password" />
                                            </div>
                                            <div class="form-group">
                                                <div class="custom-control custom-checkbox">
                                                    <input class="custom-control-input" id="rememberPasswordCheck" type="checkbox" />
                                                    <label class="custom-control-label" for="rememberPasswordCheck">Remember password</label>
                                                </div>
                                            </div>
                                            <div class="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                                <router-link class="small" to="/resetpassword">Mot de passe oublie?</router-link>
                                                <a class="btn btn-primary" href="/login">Connecter</a>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="card-footer text-center">
                                        <div class="small"><router-link to="/register">Je suis pas  inscrit , je veut creer un compte</router-link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
</template>

<script>
export default {
    created(){
        document.querySelector('body').style.backgroundColor = '#343a40';
    }
};
</script>