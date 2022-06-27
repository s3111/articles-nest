import {makeAutoObservable} from "mobx";

export default class CroppersStore {
    constructor() {
        this._zones = []
        this._servers = []
        this._croppers = []

        this._selectedZone = {}
        this._selectedServer = {}
        this._selectedPoint=[0,0]

        this._x = 0
        this._y = 0


        this._page = 1
        this._totalCount = 0
        this._limit = 20
        makeAutoObservable(this)
    }
    setX(x){
        this._x = x
    }
    setY(y){
        this._y = y
    }

    setZones(zones){
        this._zones = zones
    }
    setServers(servers){
        this._servers = servers
    }
    setCroppers(croppers){
        this._croppers = croppers
    }

    setSelectedZone(zone){
        this.setPage(1)
        this._selectedZone = zone
    }
    setSelectedServer(server){
        //this.setPage(1)
        this.setSelectedPoint(200,200)
        this._selectedServer = server
    }
    setSelectedPoint(x,y){
        this.setPage(1)
        this._selectedPoint = [x,y]
    }

    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }
    get x(){
        return this._x
    }
    get y(){
        return this._y
    }

    get zones(){
        return this._zones
    }
    get servers(){
        return this._servers
    }
    get croppers(){
        return this._croppers
    }

    get selectedZone(){
        return this._selectedZone
    }
    get selectedServer(){
        return this._selectedServer
    }
    get selectedPoint(){
        return this._selectedPoint
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