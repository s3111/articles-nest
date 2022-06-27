import React, {useContext, useEffect,useState} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchCroppers, fetchServers, fetchZones} from "../http/elephantAPI";
import Pages from "../components/Pages";
import ZoneBar from "../components/ZoneBar";
import ServerBar from "../components/ServerBar";
import SearchBar from "../components/SearchBar";
import ReactGA from "react-ga";
import Footer from "../components/Footer";
import CroppersList from "../components/CroppersList";
import {useParams} from "react-router-dom";
import {Helmet} from "react-helmet";

const CroppersPage = observer(() => {
    const {user,croppers} = useContext(Context)
    const {server} = useParams()
    if(server && server !== croppers.selectedServer.server) {
        croppers.setSelectedServer({server})
    }

    user.setSearchType('Croppers')

    useEffect(() => {
        //fetchServers('Croppers').then(data => croppers.setServers(data))
        fetchZones('Croppers').then(data => croppers.setZones(data))
    },[])

    useEffect(()=>{
        fetchServers('Croppers',croppers.selectedZone.zone).then(data => {
            croppers.setServers(data)
        })
    },[croppers.selectedZone])

    useEffect(()=>{
        if(croppers.selectedServer.server){
            fetchCroppers(croppers.selectedServer.server,croppers.page,croppers.limit,croppers.selectedPoint).then(data => {
                croppers.setCroppers(data.croppers.rows)
                croppers.setTotalCount(data.croppers.count)
                //croppers.setSelectedServer({server})
                user.setBalance(data.balance)
                ReactGA.pageview(window.location.pathname + window.location.search);
                //ReactGA.event({category: 'Search', action: 'Select server or point (croppers)'});
            })
        }
    },[croppers.selectedServer.server,croppers.selectedPoint,croppers.page])
    let ogTitle = 'Search croppers on any Travian server'
    let h1 = 'Find croppers in Travian'
    let ogDescription = 'Find all croppers 15c and 9c +150% near your villages or any different point'
    if(server){
        ogTitle = 'Search croppers on ' + server
        h1 = 'Find croppers in Travian ' + server
        ogDescription = 'Find all croppers 15c and 9c +150% near your villages or any different point on ' + server
    }
    let ogImage = 'croppers473.jpg'


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
                    <CroppersList/>
                    <Pages/>
                    <Footer/>
                </Col>
            </Row>
        </Container>
    );
});

export default CroppersPage;