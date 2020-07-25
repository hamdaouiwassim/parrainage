import {http , httpFile } from '../services/http_service';

export function register(user){
    //console.log(data);
    return http().post('api/auth/register',user);
}