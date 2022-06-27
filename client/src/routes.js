import {
    BOT_ROUTE,
    CROPPER_ROUTE,
    ELEPHANT_ROUTE,
    FAQ_ROUTE,
    HOME_ROUTE,
    LOGIN_ROUTE,
    OASES_ROUTE,
    REGISTRATION_ROUTE,
    RESETPASS_ROUTE,
    NEWPASS_ROUTE,
    USER_ROUTE, SERVERS_ROUTE,ADDACC_ROUTE
} from "./utils/consts";
import Elephant from "./pages/Elephant"
import Auth from "./pages/Auth";
import User from "./pages/User";
import Bots from "./pages/Bots"
import Bot from "./pages/Bot";
import BotCreate from "./pages/BotCreate";
import AccountAdd from "./pages/AccountAdd";
import Home from "./pages/Home";
import Faq from "./pages/Faq";
import Croppers from "./pages/Croppers";
import Oases from "./pages/Oases";
import Servers from "./pages/Servers";
import ResetPass from "./pages/ResetPass";
import NewPass from "./pages/NewPass";


export const authRoutes = [
    {
        path: USER_ROUTE,
        Component: User
    },
    {
        path: BOT_ROUTE + '/create',
        Component: BotCreate
    },
    {
        path: BOT_ROUTE + '/:id',
        Component: Bot
    },
    {
        path: BOT_ROUTE,
        Component: Bots
    },
    {
        path: ADDACC_ROUTE,
        Component: AccountAdd
    },


]

export const publicRoutes = [
    {
        path: CROPPER_ROUTE + '/:server',
        Component: Croppers
    },
    {
        path: CROPPER_ROUTE,
        Component: Croppers
    },

    {
        path: ELEPHANT_ROUTE + '/:server',
        Component: Elephant
    },
    {
        path: ELEPHANT_ROUTE,
        Component: Elephant
    },

    {
        path: OASES_ROUTE + '/:server',
        Component: Oases
    },
    {
        path: OASES_ROUTE,
        Component: Oases
    },

    {
        path: SERVERS_ROUTE,
        Component: Servers
    },

    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: FAQ_ROUTE,
        Component: Faq
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: RESETPASS_ROUTE,
        Component: ResetPass
    },
    {
        path: NEWPASS_ROUTE + '/:passToken',
        Component: NewPass
    },
    {
        path: NEWPASS_ROUTE,
        Component: NewPass
    },
/*    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
    },

 */

]