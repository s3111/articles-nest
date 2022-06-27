import React from 'react';
import {observer} from "mobx-react-lite";
import  {Container,Row,Col} from "react-bootstrap";
import {BOT_ROUTE, CROPPER_ROUTE, ELEPHANT_ROUTE, SERVERS_ROUTE, USER_ROUTE} from "../utils/consts";
import {useHistory} from 'react-router-dom'

const Footer = observer(() => {
    const history = useHistory()
    return (
            <Container className="mt-5 mb-1">
                <Row className="mb-1">
                    <Col>
                        <Row className="justify-content-center"><a className={'text-primary'} onClick={()=> history.push(SERVERS_ROUTE)} style={{cursor:'pointer'}}>Travian servers</a></Row>
                        <Row className="justify-content-center"><a className={'text-primary'} onClick={()=> history.push(CROPPER_ROUTE)} style={{cursor:'pointer'}}>Find croppers</a></Row>
                        <Row className="justify-content-center"><a className={'text-primary'} onClick={()=> history.push(ELEPHANT_ROUTE)} style={{cursor:'pointer'}}>Find elephants</a></Row>
                    </Col>
                    <Col className="justify-content-center">
                        <Row className="justify-content-center"><a target="_blank" rel="noreferrer" href="https://travian4bot.com/news/faq/">FAQ</a></Row>
                        <Row className="justify-content-center"><a target="_blank" rel="noreferrer" href="https://travian4bot.com/news/">News</a></Row>

                    </Col>
                    <Col className="justify-content-center">
                        <Row className="justify-content-center"><a className={'text-primary'} onClick={()=> history.push(USER_ROUTE)} style={{cursor:'pointer'}}>Buy points</a></Row>
                        <Row className="justify-content-center"><a target="_blank" rel="noreferrer" href="https://travian4bot.com/news/how-to-earn-points/">Earn points</a></Row>

                    </Col>

                    <Col>
                        <Row className="justify-content-center"><a target="_blank" rel="noreferrer" href="https://discord.gg/vX4uxzTKTA">Discord</a></Row>
                        <Row className="justify-content-center"><a target="_blank" rel="noreferrer" href="https://www.facebook.com/travian4bot/">Facebook</a></Row>
                        <Row className="justify-content-center"><a target="_blank" rel="noreferrer" href="https://travian4bot.com/forum/">Forum</a></Row>
                    </Col>
                </Row>
                <Row className=" mt-3 justify-content-center">Travian 4 Bot, crop cells, </Row>
                <Row className="justify-content-center">oases and elephants finder</Row>
                <Row className="justify-content-center"><a href="mailto:sales@travian4bot.com">sales@travian4bot.com</a></Row>
                <Row className="justify-content-center">2009-2022</Row>
                {/*
                <a target="_blank" rel="noreferrer" href="https://travian4bot.com">Travian 4 Bot</a>
                */
                }
            </Container>
    );
});

export default Footer;