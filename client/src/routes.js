import {
    ARTICLE_ROUTE,
    ARTICLES_ROUTE,
    HOME_ROUTE,
} from "./utils/consts";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Article from "./pages/Article";

export const publicRoutes = [

    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: ARTICLES_ROUTE,
        Component: Articles
    },
    {
        path: ARTICLE_ROUTE + '/:slug',
        Component: Article
    },

]