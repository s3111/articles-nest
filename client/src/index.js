import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/userStore"
import ElephantStore from "./store/elephantStore"
import CroppersStore from "./store/croppersStore"
import OasesStore from "./store/oasesStore"
import BotStore from "./store/botStore"
import AccStore from "./store/accStore"
import ReactGA from 'react-ga';
import ServersStore from "./store/serversStore";
import NewsStore from "./store/newsStore";

export const Context = createContext(null)
ReactGA.initialize('UA-5867435-51');
ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        croppers: new CroppersStore(),
        oases: new OasesStore(),
        elephant: new ElephantStore(),
        bot: new BotStore(),
        servers: new ServersStore(),
        accs: new AccStore(),
        news: new NewsStore(),
    }}>
    <App />
    </Context.Provider>,
  document.getElementById('root')
);


