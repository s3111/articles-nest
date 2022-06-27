import React, {useContext} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {authRoutes, publicRoutes} from "../routes";
import {ELEPHANT_ROUTE} from "../utils/consts";
import {Context} from "../index";


const AppRouter = () => {
    const {user} = useContext(Context)
    //console.log(user)
    return (
        <Switch>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            {publicRoutes.map(({path,Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={ELEPHANT_ROUTE}/>
        </Switch>
    );
};

export default AppRouter;