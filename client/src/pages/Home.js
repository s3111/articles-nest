import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useNavigate} from "react-router-dom";

const Home = observer(() => {
    //const {user,news} = useContext(Context)
    //const navigate = useNavigate()
    document.title = '';
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
});

export default Home;