import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {Spinner} from "react-bootstrap";
import {Context} from "./index";
import {check, info} from "./http/userAPI";

const App = observer(() => {
    const {user} = useContext(Context)
    const [loading,setLoading] = useState(true)
    useEffect(() =>{
        check().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
            info().then(data => {
                user.setInfo(data)
            })
            //user.setEmail(data.email)
            //user.setBalance(data.balance)
            //console.log('email',user.email,'balance',user.balance)
        }).finally(()=> setLoading(false))
    },[])

    useEffect(() =>{
        info().then(data => {
            user.setInfo(data)
        }).finally(()=> setLoading(false))
        //if(!user.info.searchType) user.setSearchType('Croppers')
    },[user.isAuth])

    if(loading){
        return <Spinner animation={"grow"}/>
    }

    return (
        <BrowserRouter>
            <Navbar />
            <AppRouter />
        </BrowserRouter>
    );
})
export default App;