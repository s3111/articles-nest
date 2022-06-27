import {makeAutoObservable} from "mobx";

export default class BotStore {
    constructor() {
        this._bots = []
        this._bot={}
        this._totalCount = 0
        makeAutoObservable(this)
    }
    setBots(bots){
        this._bots = bots
    }
    setBot(bot){
        this._bot = bot
    }
    setBotEvents(bot){
        this._bot.events = bot.events
    }

    setTotalCount(count) {
        this._totalCount = count
    }

    get bots(){
        return this._bots
    }
    get bot(){
        return this._bot
    }
    get totalCount() {
        return this._totalCount
    }

}