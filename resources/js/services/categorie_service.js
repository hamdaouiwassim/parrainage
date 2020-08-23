import {http , httpFile } from './http_service';
export function createCategorie(data){
    //console.log(data);
    return httpFile().post('/categories',data)
}
export function getAllcategories(){
    return httpFile().get("/categories");
}
export function deleteCategorie(id){
        return httpFile().delete(`categories/${id}`);
}
export function updateCategorie(id,data){
    return httpFile().post(`categories/${id}` , data );
}
export function loadMore(page){
    return http().get(`api/categories?page=${page}`);
}