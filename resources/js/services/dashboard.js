import {http , httpFile } from '../services/http_service';

export function GetStat(){
    return httpFile().get('/getstat');
}



