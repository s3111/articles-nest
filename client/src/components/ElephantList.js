import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Col, Row} from "react-bootstrap";
import '../assets/style.css';

const ElephantList = observer(() => {
    const {elephant,croppers,user} = useContext(Context)
    if(elephant.elephants.length){
        return (
            <Col className="flex">
                <Row className="mt-3 font-weight-bold">
                    <Col>x|y</Col>
                    <Col>animals</Col>
                    <Col>distance</Col>
                </Row>
                {elephant.elephants.map(item =>
                    <Row key={item.id}>
                        <Col>
                            <a target="_blank" rel="noreferrer" href={`https://${elephant.selectedServer.server}/position_details.php?x=${item.x}&y=${item.y}`}>
                                {item.x} | {item.y}
                            </a>
                        </Col>
                        <Col>
                            {item.t31 ? <span className={"mr-2"}><i className={"unit u31"}></i>&nbsp;{item.t31}</span> : null}
                            {item.t32 ? <span className={"mr-2"}><i className={"unit u32"}></i>&nbsp;{item.t32}</span> : null}
                            {item.t33 ? <span className={"mr-2"}><i className={"unit u33"}></i>&nbsp;{item.t33}</span> : null}
                            {item.t34 ? <span className={"mr-2"}><i className={"unit u34"}></i>&nbsp;{item.t34}</span> : null}
                            {item.t35 ? <span className={"mr-2"}><i className={"unit u35"}></i>&nbsp;{item.t35}</span> : null}
                            {item.t36 ? <span className={"mr-2"}><i className={"unit u36"}></i>&nbsp;{item.t36}</span> : null}
                            {item.t37 ? <span className={"mr-2"}><i className={"unit u37"}></i>&nbsp;{item.t37}</span> : null}
                            {item.t38 ? <span className={"mr-2"}><i className={"unit u38"}></i>&nbsp;{item.t38}</span> : null}
                            {item.t39 ? <span className={"mr-2"}><i className={"unit u39"}></i>&nbsp;{item.t39}</span> : null}
                            {item.t40 ? <span className={"mr-2"}><i className={"unit u40"}></i>&nbsp;{item.t40}</span> : null}
                        </Col>
                        <Col>{item.distance}</Col>
                    </Row>
                )}
            </Col>
        );
    }
    else{
        return (
            <Row className="d-flex mt-3 mb-7">

            </Row>
        );
    }
});

export default ElephantList;