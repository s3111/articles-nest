import {$authHost} from "./index";
//import jwt_decode from 'jwt-decode';


export const createAcc = async (acc) =>{
    const {data} = await $authHost.post('/api/acc',acc)
    return data
}

export const updateAcc = async (bot) =>{
    const {data} = await $authHost.put('/api/acc',acc)
    return data
}
export const deleteAcc = async (id) =>{
    const {data} = await $authHost.delete('/api/acc/'+id)
    return data
}
export const fetchAccs = async () =>{
    const {data} = await $authHost.get('/api/acc',{params:{}})
    return data
}
export const fetchOneAcc = async (id) =>{
    const {data} = await $authHost.get('/api/acc/'+id)
    return data
}