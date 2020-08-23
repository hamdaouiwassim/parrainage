import {http , httpFile } from './http_service';

export function userScope(){
    //console.log(data);
    return httpFile().get('/user/user-scope')
}

export function adminScope(){
    //console.log(data);
    return httpFile().get('/user/admin-scope')
}
