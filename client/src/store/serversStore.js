import {makeAutoObservable} from "mobx";

export default class ServersStore {
    constructor() {
        this._zones = []
        this._servers = []

        this._selectedZone = {}
        this._selectedServer = {}

        this._page = 1
        this._totalCount = 0
        this._limit = 20
        makeAutoObservable(this)
    }

    setZones(zones){
        this._zones = zones
    }
    setServers(servers){
        this._servers = servers
    }

    setSelectedZone(zone){
        this.setPage(1)
        this._selectedZone = zone
    }
    setSelectedServer(server){
        //this.setPage(1)
        //this.setSelectedPoint(200,200)
        this._selectedServer = server
    }

    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get zones(){
        return this._zones
    }
    get servers(){
        return this._servers
    }

    get selectedZone(){
        return this._selectedZone
    }
    get selectedServer(){
        return this._selectedServer
    }

    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}