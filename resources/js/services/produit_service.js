import {http , httpFile } from '../services/http_service';
export function createProduit(data){
    //console.log(data);
    return httpFile().post('/produits',data)
}

export function loadCategories(){
    return httpFile().get("/get-categories");
}
export function getAllproduits(){
    return httpFile().get("/produits");
}

export function deleteProduit(id){
        return httpFile().delete(`produits/${id}`);
}


export function updateProduit(id,data){
    return httpFile().post(`produits/${id}` , data );
}


export function loadMore(page){
    return http().get(`api/produits?page=${page}`);
}