import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Articles from "../pages/Articles";
import Home from "../pages/Home";
import Article from "../pages/Article";
import {ARTICLE_ROUTE, ARTICLES_ROUTE, HOME_ROUTE} from "../utils/consts";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={HOME_ROUTE} element={<Home/>}></Route>
            <Route path={ARTICLES_ROUTE} element={<Articles/>}></Route>
            <Route path={`${ARTICLE_ROUTE}/:slug`} element={<Article/>}></Route>
        </Routes>
    );
};

export default AppRouter;
