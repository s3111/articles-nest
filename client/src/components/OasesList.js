import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Col, Row} from "react-bootstrap";
import '../assets/style.css';

const OasesList = observer(() => {
    const {oases,user} = useContext(Context)
    console.log('oases items',oases)
    if(oases.oases.length){
        return (
            <Col className="flex">
                <Row className="mt-3 font-weight-bold">
                    <Col>x|y</Col>
                    <Col>oases</Col>
                    <Col>distance</Col>
                </Row>
                {oases.oases.map((item,i) =>
                    <Row key={i}>
                        <Col>
                            <a target="_blank" rel="noreferrer" href={`https://${oases.selectedServer.server}/position_details.php?x=${item.x}&y=${item.y}`}>
                                {item.x} | {item.y}
                            </a>
                        </Col>
                        {
                            /*
                            item.type === 6 ?
                            <Col className="merged"><i className={'r10'}></i> 15</Col>
                            :
                            <Col className="merged"><i className={'r10'}></i> 9</Col>
                            */
                        }
                        <Col className="merged">
                            {
                                /*
                                item.oasis ?
                                item.oasis.split(/\.|,/).map(oas =>
                                    <i className={'r'+oas}></i>
                                )
                                : <i></i>
                                */
                                item.type ?
                                    <i className={'r'+item.type}></i>
                                    : <i></i>
                            }
                        </Col>
                        <Col>{item.distance}</Col>
                    </Row>
                )}
            </Col>
        );
    }
    else{
        return (
            <Row className="d-flex mt-3 mb-5">{/*
                    Please select Server
                */
            }
            </Row>
        );
    }
});

export default OasesList;