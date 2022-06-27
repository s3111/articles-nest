import {$host} from "./index";

export const fetchCategories = async () => {
    const {data} = await $host.get('/api/categories')
    return data
}

export const fetchArticles = async (query) => {
    const {data} = await $host.get('/api/articles', {params: query})
    return data
}

export const fetchArticle = async (id) => {
    const {data} = await $host.get('/api/article', {params: {id}})
    return data
}
