import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Button, Card, Col, Form, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE, USER_ROUTE} from "../utils/consts";

const ServerBar = observer(() => {
    const {elephant,user,croppers,oases} = useContext(Context)
    if(user.info.searchType === 'Elephants'){
        const changeFilter = (event) => {
            let { name, checked, value } = event.target;
            const filter = elephant.selectedFilter
            value = parseInt(value)
            if(name === 'fl-with') {
                if(checked) filter.with.push(value)
                else filter.with.splice(filter.with.indexOf(value), 1)
            }
            else if(name === 'fl-without') {
                if(checked) filter.without.push(value)
                else filter.without.splice(filter.without.indexOf(value), 1)
            }
            elephant.setSelectedFilter(filter)
            console.log('filter2',elephant.selectedFilter)
        }

        if(user.isAuth && user.info.isActivated) {
            if(!elephant.x) elephant.setX(200)
            if(!elephant.y) elephant.setY(200)
        }
        else{
            elephant.setX(200)
            elephant.setY(200)
        }
        let timeAgo = ''
        if(elephant.selectedServer.lastScan){
            let s = new Date(elephant.selectedServer.lastScan)
            if(Date.now() - s > 1000*60*60*26){ // 26 hours
                timeAgo = Math.floor((Date.now() - s)/(1000*60*60*24)) + ' day(s) ago'
            }

            else if(Date.now() - s > 1000*60*60*2){ // > 2 hours
                timeAgo = Math.floor((Date.now() - s)/(1000*60*60)) + ' hours ago'
            }
            else timeAgo = 'just now'
        }
        //console.log('user.info',user.info)
        return (
            <Row className="flex">
                <Card className="flex mt-3 p-2">
                    <Form className="flex">
                        <Row>
                            {elephant.selectedServer.server ?
                                <Col>
                                    <span className="mt-3 font-weight-bold">Search elephants on {elephant.selectedServer.server}</span><br/>
                                    <span className={"text-secondary"}>{elephant.selectedServer.elephantsCount} <i className={"unit u40"}></i> found {timeAgo}</span>
                                </Col>
                                :
                                <Col><span className="mt-3 font-weight-bold">Please select server</span></Col>
                            }
                        </Row>
                        <Row className="flex">
                            <Col>
                                <Form.Control
                                    className="mt-2"
                                    placeholder="x"
                                    value={elephant.x}
                                    onChange={e => elephant.setX(e.target.value)}
                                    disabled = {!user.isAuth || !user.info.isActivated || user.info.balance < user.info.prices.search }
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    className="mt-2"
                                    placeholder="y"
                                    value={elephant.y}
                                    onChange={e => elephant.setY(e.target.value)}
                                    disabled = {!user.isAuth  || !user.info.isActivated || user.info.balance < user.info.prices.search}
                                />
                            </Col>
                        </Row>
                        <Row className={"mt-2"}>
                            <Col>With</Col>
                            <Col>
                                {
                                    [38,39,40].map(i =>
                                        <Form.Check
                                            inline
                                            key={i}
                                            type="checkbox"
                                            id={`fl-with-u${i}`}
                                            name="fl-with"
                                            label={(<><i className={`unit u${i}`}></i></>)}
                                            disabled = {!user.isAuth  || !user.info.isActivated || user.info.balance < user.info.prices.search}
                                            checked={elephant.selectedFilter.with.includes(i)}
                                            value={`${i}`}
                                            onChange={changeFilter}
                                        />
                                    )
                                }
                            </Col>
                        </Row>
                        <Row  className={"mt-2"}>
                            <Col>Without</Col>
                            <Col>
                                {
                                    [31,32,33,34,35,36,37].map(i =>
                                        <Form.Check
                                            inline
                                            key={i}
                                            type="checkbox"
                                            id={`fl-without-u${i}`}
                                            name="fl-without"
                                            label={(<><i className={`unit u${i}`}></i></>)}
                                            disabled = {!user.isAuth  || !user.info.isActivated || user.info.balance < user.info.prices.search}
                                            checked={elephant.selectedFilter.without.includes(i)}
                                            value={`${i}`}
                                            onChange={changeFilter}
                                        />
                                    )
                                }
                            </Col>
                        </Row>
                        <Row className="d-flex font-weight-bold">
                            {!user.isAuth ?
                                <Col className="mt-3">
                                    You need <NavLink to={LOGIN_ROUTE}>login</NavLink> to view elephants near your villages.
                                </Col>
                                :
                                !user.info.isActivated ?
                                    <Col className="mt-3">You need to check email and activate your account to view elephants near your villages.</Col>
                                    :
                                    user.info.balance < user.info.prices.search ?
                                        <Col className="mt-3">
                                            You need to <NavLink to={USER_ROUTE}>add points</NavLink> to see elephants near your villages.
                                        </Col>
                                        :
                                        <Col></Col>
                            }
                        </Row>
                        <Row>
                            <Col>
                                <Button
                                    variant="outline-primary"
                                    className="mt-2"
                                    onClick={()=> {
                                        elephant.setSelectedPoint(elephant.x, elephant.y)
                                    }}
                                    disabled = {!user.isAuth  || !user.info.isActivated || user.info.balance < user.info.prices.search}
                                >
                                    Search
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Card>
            </Row>
        );
    }
    else if(user.info.searchType === 'Oases'){
        if(user.isAuth && user.info.isActivated) {
            if(!oases.x) oases.setX(200)
            if(!oases.y) oases.setY(200)
        }
        else{
            oases.setX(200)
            oases.setY(200)
        }
        //console.log('user.info',user.info)
        return (
            <Row className="flex">
                <Card className="flex mt-3 p-2">
                    <Form
                        className="flex"
                    >
                        <Row>
                            {oases.selectedServer.server ?
                                <Col className="m-3 font-weight-bold">
                                    Search oases on {oases.selectedServer.server}
                                </Col>
                                :
                                <Col className="m-3 font-weight-bold">
                                    Please select server
                                </Col>
                            }
                        </Row>
                        <Row className="flex">
                            <Col>
                                <Form.Control
                                    className="mt-2 ml-3"
                                    placeholder="x"
                                    value={oases.x}
                                    onChange={e => oases.setX(e.target.value)}
                                    disabled = {!user.isAuth || !user.info.isActivated || user.info.balance < user.info.prices.search }
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    className="mt-2"
                                    placeholder="y"
                                    value={oases.y}
                                    onChange={e => oases.setY(e.target.value)}
                                    disabled = {!user.isAuth  || !user.info.isActivated || user.info.balance < user.info.prices.search}
                                />
                            </Col>
                            <Col>
                                <Button
                                    variant="outline-primary"
                                    className="mt-2"
                                    onClick={()=> {
                                        oases.setSelectedPoint(oases.x, oases.y)
                                    }}
                                    disabled = {!user.isAuth  || !user.info.isActivated || user.info.balance < user.info.prices.search}
                                >
                                    Search
                                </Button>
                            </Col>
                        </Row>

                        <Row className="d-flex font-weight-bold">
                            {!user.isAuth ?
                                <Col className="m-3">
                                    You need <NavLink to={LOGIN_ROUTE}>login</NavLink> to view oases near your villages.
                                </Col>
                                :
                                !user.info.isActivated ?
                                    <Col className="m-3">You need to check email and activate your account to view oases near your villages.</Col>
                                    :
                                    user.info.balance < user.info.prices.search ?
                                        <Col className="m-3">
                                            You need to <NavLink to={USER_ROUTE}>add points</NavLink> to see oases near your villages.
                                        </Col>
                                        :
                                        <Col></Col>
                            }
                        </Row>
                    </Form>
                </Card>
            </Row>
        );
    }
    else{
        if(user.isAuth && user.info.isActivated) {
            if(!croppers.x) croppers.setX(200)
            if(!croppers.y) croppers.setY(200)
        }
        else{
            croppers.setX(200)
            croppers.setY(200)
        }
        //console.log('user.info',user.info)
        return (
            <Row className="flex">
                <Card className="flex mt-3 p-2">
                    <Form
                        className="flex"
                    >
                        <Row>
                            {croppers.selectedServer.server ?
                                <Col className="m-3 font-weight-bold">
                                    Search croppers on {croppers.selectedServer.server}
                                </Col>
                                :
                                <Col className="m-3 font-weight-bold">
                                    Please select server
                                </Col>
                            }
                        </Row>
                        <Row className="flex">
                            <Col>
                                <Form.Control
                                    className="mt-2 ml-3"
                                    placeholder="x"
                                    value={croppers.x}
                                    onChange={e => croppers.setX(e.target.value)}
                                    disabled = {!user.isAuth || !user.info.isActivated || user.info.balance < user.info.prices.search }
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    className="mt-2"
                                    placeholder="y"
                                    value={croppers.y}
                                    onChange={e => croppers.setY(e.target.value)}
                                    disabled = {!user.isAuth  || !user.info.isActivated || user.info.balance < user.info.prices.search}
                                />
                            </Col>
                            <Col>
                                <Button
                                    variant="outline-primary"
                                    className="mt-2"
                                    onClick={()=> {
                                        croppers.setSelectedPoint(croppers.x, croppers.y)
                                    }}
                                    disabled = {!user.isAuth  || !user.info.isActivated || user.info.balance < user.info.prices.search}
                                >
                                    Search
                                </Button>
                            </Col>
                        </Row>

                        <Row className="d-flex font-weight-bold">
                            {!user.isAuth ?
                                <Col className="m-3">
                                    You need <NavLink to={LOGIN_ROUTE}>login</NavLink> to view croppers near your villages.
                                </Col>
                                :
                                !user.info.isActivated ?
                                    <Col className="m-3">You need to check email and activate your account to view croppers near your villages.</Col>
                                    :
                                    user.info.balance < user.info.prices.search ?
                                        <Col className="m-3">
                                            You need to <NavLink to={USER_ROUTE}>add points</NavLink> to see croppers near your villages.
                                        </Col>
                                        :
                                        <Col></Col>
                            }
                        </Row>
                    </Form>
                </Card>
            </Row>
        );
    }
});

export default ServerBar;