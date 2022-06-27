import {makeAutoObservable} from "mobx";

export default class NewsStore {
    constructor() {
        //this._forum = []
        //this._blog = []
        this._news = {forum: [], blog: []}
        this._forumCount = 0
        this._blogCount = 0
        makeAutoObservable(this)
    }

    get news(){
        return this._news
    }
    setNews(news){
        this._news.forum = news.forum
        this._news.blog = news.blog
    }
    get blogCount() {
        return this._blogCount
    }
    get forumCount() {
        return this._forumCount
    }
}