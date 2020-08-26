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
                component : ()=> import('./views/Dashboard.vue')
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