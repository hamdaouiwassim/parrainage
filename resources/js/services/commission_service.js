import {http , httpFile } from '../services/http_service';
export function getUserCommissions(id){
    return httpFile().get(`commissions/user/${id}`)
}

export function loadMoreUserCommission(id,page){
    return httpFile().get(`commissions/user/${id}?page=${page}`)
}

export function loadMore(page){
    return http().get(`api/commissions?page=${page}`);
}

export function getUserCommissionsAll(id){
    return httpFile().get(`commissions/user/all/${id}`)
}

export function getCommissionsAll(){
    return httpFile().get('/commissions');
}

export function getCommissionsMensuelle(){
    return httpFile().get('/cm');
}


