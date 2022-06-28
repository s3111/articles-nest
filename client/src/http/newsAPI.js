import {$host} from "./index";

export const fetchCategories = async () => {
    const {data} = await $host.get('/api/categories')
    return data
}

export const fetchArticles = async (category) => {
    const {data} = await $host.get('/api/articles', {params: {category}})
    return data
}

export const fetchArticle = async (slug) => {
    const {data} = await $host.get('/api/articles/'+slug)
    return data
}
