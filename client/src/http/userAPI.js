import {$authHost, $host} from "./index";
import jwt_decode from 'jwt-decode';
//import {ELEPHANT_ROUTE} from "../utils/consts";

export const registration = async (email,password) =>{
    const {data} = await $host.post('/api/user/registration',{email,password, role:'USER'})
    localStorage.setItem('token',data.token)
    return jwt_decode(data.token)
}

export const login = async (email,password) =>{
    const {data} = await $host.post('/api/user/login',{email,password})
    localStorage.setItem('token',data.token)
    return jwt_decode(data.token)
}

export const resetPass = async (email,captchaToken) =>{
    const {data} = await $host.post('/api/user/resetpass',{email,captchaToken})
    return data
}

export const newPass = async (password,passToken) =>{
    const {data} = await $host.post('/api/user/newpass',{password,passToken})
    return data
}


export const check = async () =>{
    const {data} = await $authHost.get('/api/user/auth')
    localStorage.setItem('token',data.token)
    return jwt_decode(data.token)
}
export const info = async () =>{
    const {data} = await $authHost.get('/api/user/info')
    return data
}
export const checkout = async (productId) =>{
    const {data} = await $authHost.post('/api/user/checkout',{productId})
    return data
}