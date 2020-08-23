import {http , httpFile } from '../services/http_service';
export function getAllachats(){
    return httpFile().get('/achats')
}

export function getAllclients(){
    return httpFile().get('/clients')
}

export function getAllproduits(){
    return httpFile().get('/produits')
}

export function loadMore(page){
    return http().get(`api/achats?page=${page}`);
}

