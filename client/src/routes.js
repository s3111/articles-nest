import {
    ARTICLES_ROUTE,
    HOME_ROUTE,
} from "./utils/consts";
import Home from "./pages/Home";
import Articles from "./pages/Articles";


export const publicRoutes = [

    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: ARTICLES_ROUTE,
        Component: Articles
    },
]