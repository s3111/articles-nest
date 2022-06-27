import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NewsStore from "./store/newsStore";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        news: new NewsStore(),
    }}>
    <App />
    </Context.Provider>,
  document.getElementById('root')
);


