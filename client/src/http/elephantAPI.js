//import {$authHost, $host} from "./index";
import {$authHost, $host} from "./index";
//import jwt_decode from 'jwt-decode';

export const fetchZones = async (searchType) =>{
    const {data} = await $host.get('/api/server/zones',{params:{searchType}})
    return data
}
export const fetchServers = async (searchType,zone,page=1,limit=30) =>{
    const {data} = await $host.get('/api/server',{params:{searchType,zone,page,limit}})
    return data
}
export const fetchElephants = async (server,page,limit=5,point,filter) =>{
    const [x,y] = point
    const {data} = await $authHost.get('/api/elephant',{params:{server,page,limit,x,y,filter}})
    return data
}
export const fetchCroppers = async (server,page,limit=5,point) =>{
    const [x,y] = point
    const {data} = await $authHost.get('/api/croppers',{params:{server,page,limit,x,y}})
    return data
}
export const fetchOases = async (server,page,limit=5,point) =>{
    const [x,y] = point
    const {data} = await $authHost.get('/api/oases',{params:{server,page,limit,x,y}})
    return data
}

/*
export const fetchOneDevice = async (id) =>{
    const {data} = await $host.get('/api/device/'+id)
    return data
}

 */