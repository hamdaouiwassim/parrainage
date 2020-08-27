import {http , httpFile } from '../services/http_service';
export function getAllachats(){
    return httpFile().get('/achats')
}

export function getAchatsUser(id){
    return httpFile().get(`achats/user/${id}`)
}

export function getAllclients(){
    return httpFile().get('/clients')
}

export function getAllproduits(){
    return httpFile().get('/produits')
}

export function BuyProduct(data){
    return httpFile().post('/achats',data)
}

export function loadMore(page){
    return http().get(`api/achats?page=${page}`);
}

