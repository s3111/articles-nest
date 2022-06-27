import React from 'react';
import {Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Footer from "../components/Footer";
import BotList from "../components/BotList";
import ReactGA from "react-ga";

const BotsPage = observer(() => {
    //const {bot,user} = useContext(Context)
    document.title = 'Travian Bot & elephants, croppers, oases finder';
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
        <Container className={"mx-0"}>
            <BotList/>
             <Footer/>
        </Container>
    );
});

export default BotsPage;