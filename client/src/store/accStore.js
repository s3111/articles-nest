import {makeAutoObservable} from "mobx";

export default class AccStore {
    constructor() {
        this._accs = []
        this._acc={}
        this._totalCount = 0
        makeAutoObservable(this)
    }
    setAccs(accs){
        this._accs = accs
    }
    setAcc(acc){
        this._acc = acc
    }
    setBotEvents(acc){
        this._acc.events = acc.events
    }

    setTotalCount(count) {
        this._totalCount = count
    }

    get accs(){
        return this._accs
    }
    get acc(){
        return this._acc
    }
    get totalCount() {
        return this._totalCount
    }
}