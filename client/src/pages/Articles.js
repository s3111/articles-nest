import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useNavigate} from "react-router-dom";

const Articles = observer(() => {
    //const {user,news} = useContext(Context)
    //const navigate = useNavigate()
    document.title = '';
    return (
        <div>
            <h1>Articles</h1>
        </div>
    );
});

export default Articles;