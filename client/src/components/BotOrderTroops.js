import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Col, Form, FormControl, Row} from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import {Units} from "../utils/consts";
import {Context} from "../index";

const BotOrderTroops = observer(() => {
    const {bot} = useContext(Context)
    let race
    if(bot.bot.conf) {
        race = bot.bot.events.Account.race
        //console.log('race',race)
    }
    else{
        console.log('Wrong conf order troops')
        return <div>Wrong conf order troops</div>
    }
    if(!race || race == '?')return <div>Unknown account race. Cant order troops</div>
    if(!bot.bot.events.Villages)return <div>Wrong events.Villages</div>
    return (
        <div>
            {Object.keys(bot.bot.events.Villages).map(did =>
                <Row key={did} className={"mt-5"}>
                    <Col>
                        {bot.bot.events.Villages[did] ? bot.bot.events.Villages[did].state.name : "did:" + did}
                    </Col>
                    <Col>
                        <InputGroup size="sm">
                            <InputGroup.Prepend>
                                <InputGroup.Text><i className={"barracks"}></i></InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                as="select"
                                value={bot.bot.conf.Villages[did].order.Barracks[0]}
                                onChange={e => {
                                    bot.bot.conf.Villages[did].order.Barracks[0] = e.target.value
                                    bot.setBot(bot.bot)
                                }}
                            >
                                <option value="0">None</option>
                                {
                                    Units[race].barracks.map(i =>
                                    <option
                                        key={i.type}
                                        value={i.type}
                                    >
                                        {i.name}
                                    </option>
                                    )
                                }
                            </Form.Control>
                            <FormControl
                                //aria-describedby="basic-addon1"
                                value={bot.bot.conf.Villages[did].order.Barracks[1]}
                                onChange={e => {
                                    bot.bot.conf.Villages[did].order.Barracks[1] = e.target.value
                                    bot.setBot(bot.bot)
                                }}
                                type={"number"}/>
                        </InputGroup>
                    </Col>
                    <Col>
                        <InputGroup size="sm">
                            <InputGroup.Prepend>
                                <InputGroup.Text><i className={"stable"}></i></InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                as="select"
                                value={bot.bot.conf.Villages[did].order.Stable[0]}
                                onChange={e => {
                                    bot.bot.conf.Villages[did].order.Stable[0] = e.target.value
                                    bot.setBot(bot.bot)
                                }}
                            >
                                <option value="0">None</option>
                                {Units[race].stable.map(i =>
                                    <option
                                        key={i.type}
                                        value={i.type}
                                    >
                                        {i.name}</option>
                                )}
                            </Form.Control>
                            <FormControl
                                //aria-describedby="basic-addon1"
                                value={bot.bot.conf.Villages[did].order.Stable[1]}
                                onChange={e => {
                                    bot.bot.conf.Villages[did].order.Stable[1] = e.target.value
                                    bot.setBot(bot.bot)
                                }}

                                type={"number"}
                            />
                        </InputGroup>
                    </Col>
                    <Col>
                        <InputGroup size="sm">
                            <InputGroup.Prepend>
                                <InputGroup.Text><i className={"workshop"}></i></InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                as="select"
                                value={bot.bot.conf.Villages[did].order.Workshop[0]}
                                onChange={e => {
                                    bot.bot.conf.Villages[did].order.Workshop[0] = e.target.value
                                    bot.setBot(bot.bot)
                                }}
                            >
                                <option value="0">None</option>
                                {Units[race].workshop.map(i =>
                                    <option
                                        key={i.type}
                                        value={i.type}
                                    >
                                        {i.name}
                                    </option>
                                )}
                            </Form.Control>
                            <FormControl
                                //aria-describedby="basic-addon1"
                                value={bot.bot.conf.Villages[did].order.Workshop[1]}
                                onChange={e => {
                                    bot.bot.conf.Villages[did].order.Workshop[1] = e.target.value
                                    bot.setBot(bot.bot)
                                }}
                                type={"number"}
                            />
                        </InputGroup>
                    </Col>
                </Row>
            )}
        </div>
    );
});

export default BotOrderTroops;