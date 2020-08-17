import {http , httpFile } from '../services/http_service';
import jwt from 'jsonwebtoken';
import store from '../store';
export function register(user){
    //console.log(data);
    return http().post('api/auth/register',user);
}


export function login(user){
    //console.log(data);
    return http().post('api/auth/login',user).then(Response=>{
        if ( Response.status === 200 ){
            setToken(Response.data)

        }
        return Response.data;
    });
} 
function setToken(user){
    const token = jwt.sign({user :user }, 'token')
    localStorage.setItem('token',token);
    store.dispatch('authenticate',user.user)
}

export function isLoggedIn(){
    const token = localStorage.getItem('token');
    return token != null;
}

export function logout(){
   
    http().get('api/auth/logout');
    localStorage.removeItem('token');

}

export function getAccessToken(){
   // token = null;
    const token = localStorage.getItem('token');
    if (!token){
        return null;
    }
    //console.log(token);
    //jwt.decode(token, {complete: true});
    const tokenData = jwt.decode(token);
    console.log(tokenData);
    return tokenData.user.access_token;

    
    
    
    
    
}

export function getProfile(){
    return  http().get('api/auth/profile');
}