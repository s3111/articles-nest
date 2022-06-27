import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Col, FormControl, Row} from "react-bootstrap";

const BotVillages = observer(() => {
    const {bot} = useContext(Context)
    //let race
    let conf = {}
    if(bot.bot.conf) conf = bot.bot.conf
    else return <div>Wrong bot conf</div>
    if(!bot.bot.conf.checkVillages) bot.bot.conf.checkVillages = {}

    return (
        <div>
            <Row className="">
                <Col>Desired number of villages</Col>
                <Col>
                    <FormControl
                        //aria-describedby="basic-addon1"
                        value={conf.checkVillages && conf.checkVillages.numNeeded ? conf.checkVillages.numNeeded : 1}
                        onChange={e => {
                            bot.bot.conf.checkVillages.numNeeded = parseInt(e.target.value)
                            bot.setBot(bot.bot)
                        }}
                        type={"number"}
                    />
                </Col>
            </Row>
        </div>

    );
});

export default BotVillages;