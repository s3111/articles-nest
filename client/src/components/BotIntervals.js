import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Col, FormControl, Row} from "react-bootstrap";

const BotIntervals = observer(() => {
    const {bot} = useContext(Context)
    //let race
    let conf = {}
    if(bot.bot.conf) conf = bot.bot.conf
    else return <div>Wrong bot conf</div>

    return (
        <div>
            {conf.Intervals ?
                    <div>
                        <Row className="font-weight-bold">
                            <Col>Name</Col>
                            <Col>Send?</Col>
                            <Col>Last send, gmt +2</Col>
                        </Row>
                        {

                            Object.keys(conf.Intervals).map((i, key) =>
                            <Row key={key}>
                                <Col>{
                                    //conf.Intervals[i]
                                }</Col>
                                <Col>{i}</Col>
                                <Col>
                                    <FormControl
                                        //aria-describedby="basic-addon1"
                                        //value={conf.Intervals[i]}
                                        onChange={e => {
                                            bot.bot.conf.Intervals[i] = e.target.value
                                            bot.setBot(bot.bot)
                                        }}
                                        type={"number"}/>
                                </Col>
                            </Row>
                        )


                        }
                    </div>
                    :
                    <span>Wrong conf.Intervals</span>
                }
        </div>
    );
});

export default BotIntervals;