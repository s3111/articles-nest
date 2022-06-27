import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {} // ???
        this._info = {}
        //this._info.prices = {}
        makeAutoObservable(this)
    }
    setIsAuth(bool){
        this._isAuth = bool
    }
    setUser(user){
        this._user = user
    }
    setInfo(info){
        this._info = info
        this._info.name = info.email.split('@')[0]
        //this._info.prices = info.prices
    }

    setBalance(balance) {
        this._info.balance = balance
    }

    setSearchType(searchType) {
        this._info.searchType = searchType
    }


    get isAuth(){
        return this._isAuth
    }
    get user(){
        return this._user
    }
    get info(){
        return this._info
    }
/*
    get email(){
        return this._email
    }
    get balance(){
        return this._balance
    }
*/
}