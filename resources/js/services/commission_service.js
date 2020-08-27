import {http , httpFile } from '../services/http_service';
export function getUserCommissions(id){
    return httpFile().get(`commissions/user/${id}`)
}

export function loadMore(id,page){
    return http().get(`api/commissions/user/${id}?page=${page}`);
}

export function getUserCommissionsAll(id){
    return httpFile().get(`commissions/user/all/${id}`)
}
