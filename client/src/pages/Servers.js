import React, {useContext, useEffect, useState} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchOases, fetchServers, fetchZones} from "../http/elephantAPI";
import Pages from "../components/Pages";
import ZoneBar from "../components/ZoneBar";
import ReactGA from "react-ga";
import Footer from "../components/Footer";
import ServersList from "../components/ServersList";
import {useParams} from "react-router-dom";
import {Helmet} from "react-helmet";

const ServersPage = observer(() => {
    const {user,servers} = useContext(Context)
    user.setSearchType('Servers')
    useEffect(() => {
        fetchZones('Servers').then(data => servers.setZones(data))
        ReactGA.pageview(window.location.pathname + window.location.search);
    },[])

    useEffect(()=>{
        fetchServers('Servers',servers.selectedZone.zone,servers.page,servers.limit).then(data => {
            servers.setServers(data.rows)
            servers.setTotalCount(data.count)
            //ReactGA.pageview(window.location.pathname + window.location.search);
        })
    },[servers.selectedZone,servers.page])

    let ogTitle = 'Travian servers list'
    let h1 = 'Travian servers list'
    let ogDescription = 'All Travian servers start dates and scan results'
    let ogImage = 'oases473.png'
    return (
        <Container>
            <Helmet>
                <title>{ogTitle}</title>
                <meta name="description" content={ogDescription} />
                <meta name="twitter:card" content={ogImage} />
                <meta name="twitter:title" content={ogTitle} />
                <meta name="twitter:description" content={ogDescription} />
                <meta name="twitter:image" content={ogImage} />
                <meta property="og:title" content={ogTitle} />
                <meta property="og:description" content={ogDescription} />
                <meta property="og:image" content={ogImage} />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:site_name" content="Travian 4 Bot" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
            </Helmet>
            <Row className="mt-2">
                <Col>
                    <h1 style={{fontSize: '18px'}}>{h1}</h1>
                    <ZoneBar/>
                    <ServersList/>
                    <Pages/>
                    <Footer/>
                </Col>
            </Row>
        </Container>
    );
});

export default ServersPage;