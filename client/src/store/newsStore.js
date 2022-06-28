import {makeAutoObservable} from "mobx";

export default class NewsStore {
    constructor() {
        this._categories = []
        this._category = {}
        this._articles = []
        this._articlesCount = 0
        this._article = {}
        this._limit = 5
        this._page = 1
        makeAutoObservable(this)
    }

    get categories() {
        return this._categories
    }
    get category() {
        return this._category
    }
    get articles() {
        return this._articles
    }
    get articlesCount() {
        return this._articlesCount
    }
    get article() {
        return this._article
    }
    get limit() {
        return this._limit
    }
    get page() {
        return this._page
    }

    setPage(page) {
        this._page = page
    }

    setCategory(category){
        this._category = category
    }
    setCategories(categories){
        this._categories = categories
    }
    setArticle(article){
        this._article = article
    }
    setArticles(articles){
        this._articles = articles
    }
    setArticlesCount(articlesCount){
        this._articlesCount = articlesCount
    }



}