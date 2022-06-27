import React from 'react';
import {Card, Col,} from "react-bootstrap";
import {useHistory} from "react-router-dom"

const ElephantItem = ({elephant}) => {
    const History = useHistory()
    console.log(History)
    return (
        <Col md={3} className="mt-3"
             //onClick={()=> History.push(DEVICE_ROUTE+'/'+device.id)}
        >
            <Card style={{width: 150, cursor: 'pointer'}} border={'light'}>

                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>({elephant.x}|{elephant.y})</div>
                    <div>{elephant.elephants}</div>
                </div>
                <div></div>
            </Card>
        </Col>
    );
};

export default ElephantItem;