import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Col, Row} from "react-bootstrap";
import '../assets/style.css';

const CroppersList = observer(() => {
    const {croppers,user} = useContext(Context)
    console.log('croppers items',croppers)
    if(croppers.croppers.length){
        return (
            <Col className="flex">
                <Row className="mt-3 font-weight-bold">
                    <Col>x|y</Col>
                    <Col>type</Col>
                    <Col>oases</Col>
                    <Col>distance</Col>
                </Row>
                {croppers.croppers.map((item,i) =>
                    <Row key={i}>
                        <Col>
                            <a target="_blank" rel="noreferrer" href={`https://${croppers.selectedServer.server}/karte.php?x=${item.x}&y=${item.y}`}>
                                {item.x} | {item.y}
                            </a>
                        </Col>
                        {item.type === 6 ?
                            <Col className="merged"><i className={'r10'}></i> 15</Col>
                            :
                            <Col className="merged"><i className={'r10'}></i> 9</Col>
                        }
                        <Col className="merged">
                            {item.oasis ?
                                item.oasis.split(/\.|,/).map((oas,k1) =>
                                    <i key={k1} className={'r'+oas}></i>
                                )
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

export default CroppersList;