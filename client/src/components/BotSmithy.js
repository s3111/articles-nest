import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Col, Form, FormControl, Row, Table} from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import {Units} from "../utils/consts";

const BotSmithy = observer(() => {
    const {bot} = useContext(Context)
    let events = {}
    if(bot.bot.events) {
        events = bot.bot.events
    }
    else return <div>Wrong bot events</div>

    let race
    let units = []
    if(bot.bot.conf) {
        race = bot.bot.events.Account.race
        //console.log('race',race)
    }
    else{
        console.log('Wrong conf order troops')
        return <div>Wrong conf order smithy</div>
    }
    if(!bot.bot.events.Villages)return <div>Wrong events.Villages</div>
    if(!race || race == '?')return <div>Unknown account race. Cant order smithy</div>
    else {
        let unitsByBld = Units[race]

        if(unitsByBld.barracks) unitsByBld.barracks.map(i => units.push(i))
        if(unitsByBld.stable) unitsByBld.stable.map(i => units.push(i))
        if(unitsByBld.workshop) unitsByBld.workshop.map(i => units.push(i))
        //console.log(units)
    }


    return (

        <div>
            <Form.Check
                type="checkbox"
                id={'orderSmithy'}
                name={'orderSmithy'}
                label="order updates in smithy"
                checked={bot.bot.conf.orderSmithy ? 1 : 0}
                value="1"
                onChange={e => {
                    e.target.checked ? bot.bot.conf.orderSmithy = 1 : bot.bot.conf.orderSmithy = 0
                    bot.setBot(bot.bot)
                }}
            />

            <Table  size="sm" style={{maxWidth: '750px'}} className={"mt-2"}>
                <thead>
                <tr className="mt-3 font-weight-bold">
                    <td style={{wordWrap: 'break-word', wordBreak: 'break-word'}}>Village (sm. lvl)</td>
                    <td>Progress</td>
                    {units.length === 8
                        ? units.map((u,k) =>
                            <td key={k}>
                                <i className={`unit u${u.id}`}></i>
                            </td>
                        )
                        : null
                    }
                </tr>
                </thead>
                <tbody>
                {Object.keys(bot.bot.events.Villages).map(did =>
                    <tr key={did} className={"mt-5"}>
                        <td>
                            {bot.bot.events.Villages[did].state && bot.bot.events.Villages[did].state.name ? bot.bot.events.Villages[did].state.name.substring(0, 10) : 'did: '+did}
                            {bot.bot.events.Villages[did].Smithy && bot.bot.events.Villages[did].Smithy.level ? <span className={"text-secondary"}>({bot.bot.events.Villages[did].Smithy.level})</span>: null}
                        </td>

                        <td></td>
                        {units.length === 8
                            ? units.map((u,k) =>
                                <td key={did + '-' + k}>
                                    {
                                        bot.bot.events.Villages[did] &&
                                        bot.bot.events.Villages[did].Smithy &&
                                        bot.bot.events.Villages[did].Smithy.units &&
                                        bot.bot.events.Villages[did].Smithy.units['u' + (k+1)]
                                            ? <span>{bot.bot.events.Villages[did].Smithy.units['u' + (k+1)]}</span>
                                            : <span>-</span>
                                    }
                                    <Form.Check
                                        type="checkbox"
                                        id={'Smithy' + did + '-' + k}
                                        //name={'orderSmithy'}
                                        //label="order updates in smithy"
                                        checked={bot.bot.conf.Villages[did].Smithy && bot.bot.conf.Villages[did].Smithy.units && bot.bot.conf.Villages[did].Smithy.units['u' + (k+1)] ? 1 : 0}
                                        value="1"
                                        onChange={e => {
                                            e.target.checked ? bot.bot.conf.Villages[did].Smithy.units['u' + (k+1)] = 1 : bot.bot.conf.Villages[did].Smithy.units['u' + (k+1)] = 0
                                            console.log(bot.bot.conf.Villages[did].Smithy.units)
                                            bot.setBot(bot.bot)
                                        }}
                                    />
                                </td>
                            )
                            : null
                        }

                    </tr>
                )}
                </tbody>
            </Table>
        </div>


    );
});

export default BotSmithy;

{/*
{
                            bot.bot.events.Villages[did] &&
                            bot.bot.events.Villages[did].state &&
                            bot.bot.events.Villages[did].state.name
                                ? <span>{bot.bot.events.Villages[did].state.name}</span>
                                : <span>did: {did}</span>
                        }


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
                            */}
