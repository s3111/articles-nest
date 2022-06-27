import {$authHost, $host} from "./index";

export const fetchNews = async (searchType) =>{
    if(!searchType) searchType = 'All'
    const {data} = await $host.get('/api/news',{params:{searchType}})
    return data
}
