import React, {createContext} from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import NewsStore from "./store/newsStore";

export const Context = createContext(null)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Context.Provider value={{
        news: new NewsStore(),
    }}>
        <App/>
    </Context.Provider>
);


