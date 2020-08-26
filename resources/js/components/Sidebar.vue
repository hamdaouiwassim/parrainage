<template>
    <div id="layoutSidenav_nav">
                <nav
                    class="sb-sidenav accordion sb-sidenav-dark"
                    id="sidenavAccordion"
                >
                    <div class="sb-sidenav-menu">
                        <div class="nav" v-if="$store.state.profile.role === 'admin'" >
                         
                            <router-link to="/home" class="nav-link" exact >
                            
                                <div class="sb-nav-link-icon">
                                    <i class="fas fa-tachometer-alt"></i>
                                </div>
                                Dashboard
                       
                            </router-link>
                            <router-link to="/home/categories" class="nav-link" exact>
                               
                                    <div class="sb-nav-link-icon">
                                        <i class="fas fa-tachometer-alt"></i>
                                    </div>
                                    Categories
                         
                            </router-link>
                            <router-link to="/home/produits" class="nav-link" exact>
                               
                                    <div class="sb-nav-link-icon">
                                        <i class="fas fa-tachometer-alt"></i>
                                    </div>
                                    Produits
                         
                            </router-link>
                            <router-link to="/home/clients" class="nav-link" exact>
                               
                                    <div class="sb-nav-link-icon">
                                        <i class="fas fa-tachometer-alt"></i>
                                    </div>
                                    Clients
                         
                            </router-link>
                            <router-link to="/home/achats" class="nav-link" exact>
                               
                                    <div class="sb-nav-link-icon">
                                        <i class="fas fa-tachometer-alt"></i>
                                    </div>
                                    Achats
                         
                            </router-link>
                            <router-link to="/home" class="nav-link" exact>
                               
                                    <div class="sb-nav-link-icon">
                                        <i class="fas fa-tachometer-alt"></i>
                                    </div>
                                    Commissions
                         
                            </router-link>
                            <router-link to="/home" class="nav-link" exact>
                               
                                    <div class="sb-nav-link-icon">
                                        <i class="fas fa-tachometer-alt"></i>
                                    </div>
                                    Profile
                         
                            </router-link>
                           
                         
                         
                  
                        
                        </div>



                        <!-- user sidebar -->
                        <div class="nav" v-if="$store.state.profile.role === 'user'" >
                         
                            <router-link to="/home" class="nav-link" exact >
                            
                                <div class="sb-nav-link-icon">
                                    <i class="fas fa-tachometer-alt"></i>
                                </div>
                                Dashboard
                       
                            </router-link>
                            <router-link to="/home/arbre" class="nav-link" exact>
                               
                                    <div class="sb-nav-link-icon">
                                        <i class="fas fa-tachometer-alt"></i>
                                    </div>
                                    Arbre parrainage
                         
                            </router-link>
                            <router-link to="/home/parrainage" class="nav-link" exact>
                               
                                    <div class="sb-nav-link-icon">
                                        <i class="fas fa-tachometer-alt"></i>
                                    </div>
                                    Parrainage directe
                         
                            </router-link>
                            <router-link to="/home/achats" class="nav-link" exact>
                               
                                    <div class="sb-nav-link-icon">
                                        <i class="fas fa-tachometer-alt"></i>
                                    </div>
                                    Mes Achats
                         
                            </router-link>
                           
                            <router-link to="/home/commissions" class="nav-link" exact>
                               
                                    <div class="sb-nav-link-icon">
                                        <i class="fas fa-tachometer-alt"></i>
                                    </div>
                                    Commissions
                         
                            </router-link>
                            <router-link to="/home/profile" class="nav-link" exact>
                               
                                    <div class="sb-nav-link-icon">
                                        <i class="fas fa-tachometer-alt"></i>
                                    </div>
                                    Profile
                         
                            </router-link>
                           
                         
                         
                  
                        
                        </div>
                    </div>
                 
                </nav>
            </div>
</template>