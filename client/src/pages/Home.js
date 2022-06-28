import React from 'react';
import {observer} from "mobx-react-lite";
import {Container} from "react-bootstrap";

const Home = observer(() => {
    document.title = '';
    return (
        <Container>
            <h1>Home</h1>
        </Container>
    );
});

export default Home;