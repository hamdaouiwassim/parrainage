import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';



Vue.use(Router);
const routes = [
    {
        path:'/home',
        name:'home',
        component : Home ,
        children :[
            {
                path:'',
                name:'dashboard',
                component : ()=> import('./views/Dashboard.vue')
            },
            {
                path:'produits',
                name:'produits',
                component : ()=> import('./views/Produits.vue')
            }

        ]

    },
    
    {
        path:'/register',
        name:'register',
        component : ()=> import('./views/authentication/Register.vue')
    },
    
    {
        path:'/login',
        name:'login',
        component : ()=> import('./views/authentication/Login.vue')
    },
    
    {
        path:'/resetpassword',
        name:'resetpassword',
        component : ()=> import('./views/authentication/Password.vue')
    }
]
const router = new Router({
    routes : routes,
    linkActiveClass : 'active'
});
export default router;