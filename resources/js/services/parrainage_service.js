import {http , httpFile } from '../services/http_service';
export function getParrainageDirectes(id){
    return httpFile().get(`parrainage/directe/${id}`);
}
export function getusers(){
    return httpFile().get('parrainage/users');
}

export function getarbre(id){
    return httpFile().get(`parrainage/arbre/${id}`);
}


export function getParrainage(id){
    return httpFile().get(`parrainage/user/${id}`);
}






