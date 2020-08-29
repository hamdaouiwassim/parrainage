import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import * as auth from './services/auth_service';



Vue.use(Router);
const routes = [
    {
        path:'/home',
        
        component : Home ,
        children :[
            {
                path:'',
                name:'dashboard',
                component : ()=> import('./views/Dashboard.vue'),
                beforeEnter(to,from,next){
                    console.log(auth.getUserRole());
                    if (auth.getUserRole() == 'admin' ){
                        next()
                    }else{
                        next('/home/user/produits')
                    }
                }
            },  
            {
                path:'parrainage',
                name:'parrainage',
                component : ()=> import('./views/user/Parrainage.vue'),
                beforeEnter(to,from,next){
                    console.log(auth.getUserRole());
                    if (auth.getUserRole() == 'user' ){
                        next()
                    }else{
                        next('/404')
                    }
                }
            }
            ,
            {
                path:'commissions',
                name:'commissions',
                component : ()=> import('./views/Commissions.vue'),
                beforeEnter(to,from,next){
                    console.log(auth.getUserRole());
                    if (auth.getUserRole() == 'admin' ){
                        next()
                    }else{
                        next('/404')
                    }
                }
            }
            , 
            {
                path:'profile',
                name:'profile',
                component : ()=> import('./views/Profile.vue'),
                beforeEnter(to,from,next){
                    console.log(auth.getUserRole());
                    if (auth.getUserRole() == 'admin' ){
                        next()
                    }else{
                        next('/404')
                    }
                }
            }
            ,  
            {
                path:'user/produits',
                name:'user_produits',
                component : ()=> import('./views/user/Produits.vue'),
                beforeEnter(to,from,next){
                    console.log(auth.getUserRole());
                    if (auth.getUserRole() == 'user' ){
                        next()
                    }else{
                        next('/404')
                    }
                }
            },
            {
                path:'user/achats',
                name:'user_achats',
                component : ()=> import('./views/user/Achats.vue'),
                beforeEnter(to,from,next){
                    console.log(auth.getUserRole());
                    if (auth.getUserRole() == 'user' ){
                        next()
                    }else{
                        next('/404')
                    }
                }
            },
            {
                path:'user/commissions',
                name:'user_commissions',
                component : ()=> import('./views/user/Commissions.vue'),
                beforeEnter(to,from,next){
                    console.log(auth.getUserRole());
                    if (auth.getUserRole() == 'user' ){
                        next()
                    }else{
                        next('/404')
                    }
                }
            },
            {
                path:'user/profile',
                name:'user_profile',
                component : ()=> import('./views/user/Profile.vue'),
                beforeEnter(to,from,next){
                    console.log(auth.getUserRole());
                    if (auth.getUserRole() == 'user' ){
                        next()
                    }else{
                        next('/404')
                    }
                }
            },
            {
                path:'user/arbres',
                name:'user_arbres',
                component : ()=> import('./views/user/Arbre.vue'),
                beforeEnter(to,from,next){
                    console.log(auth.getUserRole());
                    if (auth.getUserRole() == 'user' ){
                        next()
                    }else{
                        next('/404')
                    }
                }
            },
            {
                path:'produits',
                name:'produits',
                component : ()=> import('./views/Produits.vue'),
                beforeEnter(to,from,next){
                    console.log(auth.getUserRole());
                    if (auth.getUserRole() == 'admin' ){
                        next()
                    }else{
                        next('/404')
                    }
                }
            },
            {
                path:'categories',
                name:'categories',
                component : ()=> import('./views/Categories.vue')
            }
            ,
            {
                path:'clients',
                name:'clients',
                component : ()=> import('./views/Clients.vue'),
                beforeEnter(to,from,next){
                    console.log(auth.getUserRole());
                    if (auth.getUserRole() == 'admin' ){
                        next()
                    }else{
                        next('/404')
                    }
                }
            }
            ,
            {
                path:'achats',
                name:'achats',
                component : ()=> import('./views/Achats.vue'),
                beforeEnter(to,from,next){
                    console.log(auth.getUserRole());
                    if (auth.getUserRole() == 'admin' ){
                        next()
                    }else{
                        next('/404')
                    }
                }
            }

        ],
        beforeEnter(to,from,next){
                if (!auth.isLoggedIn() ){
                    next('/login')
                }else{
                    next()
                }
        }

    },
    
    {
        path:'/register',
        name:'register',
        component : ()=> import('./views/authentication/Register.vue'),
        beforeEnter(to,from,next){
            if (!auth.isLoggedIn() ){
                next()
            }else{
                next('/home')
            }
        }
    },
    
    {
        path:'/login',
        name:'login',
        component : ()=> import('./views/authentication/Login.vue'),
        beforeEnter(to,from,next){
            if (!auth.isLoggedIn() ){
                next()
            }else{
                next('/home')
            }
    }
    },
    
    {
        path:'/resetpassword',
        name:'resetpassword',
        component : ()=> import('./views/authentication/Password.vue')
    },
    {
        path : '*',
        name : '404',
        component : ()=> import('./views/404.vue')
    }
]
const router = new Router({
    mode : 'history',
    routes : routes,
    linkActiveClass : 'active'
});
export default router;