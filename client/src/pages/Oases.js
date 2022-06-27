import React, {useContext, useEffect, useState} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchOases, fetchServers, fetchZones} from "../http/elephantAPI";
import Pages from "../components/Pages";
import ZoneBar from "../components/ZoneBar";
import ServerBar from "../components/ServerBar";
import SearchBar from "../components/SearchBar";
import ReactGA from "react-ga";
import Footer from "../components/Footer";
import OasesList from "../components/OasesList";
import {useParams} from "react-router-dom";
import {Helmet} from "react-helmet";

const OasesPage = observer(() => {
    const {user,oases} = useContext(Context)
    const [title, setTitle] = useState("Search oases on any Travian server");

    const {server} = useParams()
    if(server && server !== oases.selectedServer.server) {
        oases.setSelectedServer({server})
        setTitle("Search oases on "+ server)
    }

    user.setSearchType('Oases')
    useEffect(() => {
        //fetchServers('Croppers').then(data => croppers.setServers(data))
        fetchZones('Oases').then(data => oases.setZones(data))
    },[])

    useEffect(()=>{
        fetchServers('Oases',oases.selectedZone.zone).then(data => {
            oases.setServers(data)
        })
    },[oases.selectedZone])

    useEffect(()=>{
        if(oases.selectedServer.server){
            fetchOases(oases.selectedServer.server,oases.page,oases.limit,oases.selectedPoint).then(data => {
                oases.setOases(data.oases.rows)
                oases.setTotalCount(data.oases.count)
                user.setBalance(data.balance)
                ReactGA.pageview(window.location.pathname + window.location.search);
                //ReactGA.event({category: 'Search', action: 'Select server or point (oases)'});
            })
        }
    },[oases.selectedServer,oases.selectedPoint,oases.page])
    let ogTitle = 'Search oases on any Travian server'
    let ogDescription = 'Find all oases near your villages or any different point'
    let h1 = 'Find oases in Travian'
    if(server){
        ogTitle = 'Search oases on ' + server
        h1 = 'Find oases in Travian ' + server
        ogDescription = 'Find all oases near your villages or any different point on ' + server
    }
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
                    <ServerBar/>
                    <SearchBar/>
                    <OasesList/>
                    <Pages/>
                    <Footer/>
                </Col>
            </Row>
        </Container>
    );
});

export default OasesPage;