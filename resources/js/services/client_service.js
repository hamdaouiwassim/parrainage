import {http , httpFile } from '../services/http_service';
export function getAllclients(){
    return httpFile().get('/clients')
}


export function loadMore(page){
    return http().get(`api/clients?page=${page}`);
}

