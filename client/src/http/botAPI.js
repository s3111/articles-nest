import {$authHost} from "./index";
//import jwt_decode from 'jwt-decode';


export const createBot = async (bot) =>{
    const {data} = await $authHost.post('/api/bot',bot)
    return data
}
export const updateBot = async (bot) =>{
    const {data} = await $authHost.put('/api/bot',bot)
    return data
}
export const deleteBot = async (id) =>{
    const {data} = await $authHost.delete('/api/bot/'+id)
    return data
}
export const fetchBots = async () =>{
    const {data} = await $authHost.get('/api/bot',{params:{}})
    return data
}
export const fetchOneBot = async (id) =>{
    const {data} = await $authHost.get('/api/bot/'+id)
    return data
}