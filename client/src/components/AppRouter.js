import React from 'react';
import { Route, Routes, Navigate} from 'react-router-dom';
import {publicRoutes} from "../routes";
import {HOME_ROUTE} from "../utils/consts";
import Articles from "../pages/Articles";
import Home from "../pages/Home";

//import {Context} from "../index";

const AppRouter = () => {
    //const navigate = useNavigate()
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/articles" element={<Articles />}></Route>
        </Routes>
    );
};

export default AppRouter;
//<Navigate to={HOME_ROUTE} replace={true} />
//<Route path="/" element={<Home />}></Route>
/*

            {publicRoutes.map(({path, Component}) =>
                //<Route key={path} path={path} element={Component} exact/>
                //<Route key={path} path={path} component={Component}></Route>

            )}

 */