import React, {useContext, useEffect, useState} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ElephantList from "../components/ElephantList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchElephants, fetchServers, fetchZones} from "../http/elephantAPI";
import Pages from "../components/Pages";
import ZoneBar from "../components/ZoneBar";
import ServerBar from "../components/ServerBar";
import SearchBar from "../components/SearchBar";
import ReactGA from "react-ga";
import Footer from "../components/Footer";
import {useParams} from "react-router-dom";
import {Helmet} from "react-helmet";

const ElephantPage = observer(() => {
    const {elephant,user} = useContext(Context)
    //const [title, setTitle] = useState("Search elephants on any Travian server");
    const {server} = useParams()

    if(server && server !== elephant.selectedServer.server) {
        if(elephant.servers){
            elephant.servers.map(srv => {
                //console.log('zz',elephant.servers,server)
                if(srv.server === server){
                    elephant.setSelectedServer({
                        server: srv.server,
                        elephantsCount: srv.elephantsCount,
                        from_zone: srv.from_zone,
                        id: srv.id,
                        lastScan: srv.lastScan,
                        start: srv.start,
                    })
                }
            })
        }
        else elephant.setSelectedServer({server})
        //setTitle("Search elephants on "+ server)
    }

    user.setSearchType('Elephants')
    //user.info.searchType = 'Elephants'
    useEffect(() => {
            fetchZones('Elephants').then(data => elephant.setZones(data))
    },[])

    useEffect(()=>{
        //fetchServers('Elephants', elephant.selectedZone.zone,elephant.page,elephant.limit).then(data => {
        fetchServers('Elephants', elephant.selectedZone.zone).then(data => {
            elephant.setServers(data)
        })
    },[elephant.selectedZone])

    useEffect(()=>{
        if(elephant.selectedServer.server){
            fetchElephants(elephant.selectedServer.server,elephant.page,elephant.limit,elephant.selectedPoint,elephant.selectedFilter).then(data => {
                elephant.setElephants(data.elephants.rows)
                elephant.setTotalCount(data.elephants.count)
                user.setBalance(data.balance)
                //ReactGA.event({category: 'Search', action: 'Select server or point (elephant)'});
                ReactGA.pageview(window.location.pathname + window.location.search);
            })
        }
    },[elephant.selectedServer.server,elephant.selectedPoint,elephant.page])
    //document.title = title;
    let ogTitle = 'Search elephants on any Travian server'
    let h1 = 'Find elephants in Travian'
    let ogDescription = 'Find all elephants near your villages or any different point'
    if(server){
        ogTitle = 'Search elephants on ' + server
        h1 = 'Find elephants in Travian ' + server
        ogDescription = 'Find all elephants near your villages or any different point on ' + server
    }
    let ogImage = 'elephant600.png'
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
                {
                    /*
                <meta name="twitter:site" content="@user" />
                <meta name="twitter:creator" content="@user" />

                     */
                }
            </Helmet>
            <Row className="mt-2">
                <Col>
                    <h1 style={{fontSize: '18px'}}>{h1}</h1>
                    <ZoneBar/>
                    <ServerBar/>
                    <SearchBar/>
                    <ElephantList/>
                    <Pages/>
                    <Footer/>
                </Col>
            </Row>
        </Container>
    );
});

export default ElephantPage;