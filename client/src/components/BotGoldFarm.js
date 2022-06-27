import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Col, Form, Row} from "react-bootstrap";

const BotGoldFarm = observer(() => {
    const {bot} = useContext(Context)
    //let race
    let events = {}
    //if(bot.bot.conf) race = bot.bot.conf.Account.race
    //if(bot.bot.stat) stat = bot.bot.stat
    //if(!bot.bot.stat){}

    if(bot.bot.events) {
        events = bot.bot.events
    }
    else return <div>Wrong bot events</div>
//if(events.ttwars)
    return (
        <div>
            <Form.Check
                type="checkbox"
                id={"needSendLists"}
                name={"needSendLists"}
                checked={bot.bot.conf.FarmListGold.needSendLists ? 1 : 0}
                value="0"
                label = {"need send lists"}
                onChange={e => {
                    e.target.checked ? bot.bot.conf.FarmListGold.needSendLists = 1 : bot.bot.conf.FarmListGold.needSendLists = 0
                    bot.setBot(bot.bot)
                }}
            />
            <Form.Check
                type="checkbox"
                id={"needFarmNatars"}
                name={"needFarmNatars"}
                checked={bot.bot.conf.FarmListGold.needFarmNatars ? 1 : 0}
                value="0"
                label = {"need create lists with natars farms (ttwars only)"}
                disabled = {bot.bot.events.Account.ttwars ? 0 : 1}
                onChange={e => {
                    e.target.checked ? bot.bot.conf.FarmListGold.needFarmNatars = 1 : bot.bot.conf.FarmListGold.needFarmNatars = 0
                    bot.setBot(bot.bot)
                }}
            />
            <Form.Check
                type="checkbox"
                id={"needFarmOases"}
                name={"needFarmOases"}
                checked={bot.bot.conf.FarmListGold.needFarmOases ? 1 : 0}
                value="0"
                disabled={true}
                label = {"need create lists with oases"}
                onChange={e => {
                    e.target.checked ? bot.bot.conf.FarmListGold.needFarmOases = 1 : bot.bot.conf.FarmListGold.needFarmOases = 0
                    bot.setBot(bot.bot)
                }}
            />
            {events.Account && events.Account.clubActive ?
                events.FarmListGold.lists ?
                    <div className="mt-3">
                        <Row className="font-weight-bold">
                            <Col>Name</Col>
                            <Col>Type</Col>
                            <Col>Send?</Col>
                            <Col>Last send, gmt +2</Col>
                        </Row>
                        {Object.keys(events.FarmListGold.lists).map((l, key) =>
                        <Row key={key}>
                            <Col>{events.FarmListGold.lists[l].listName}</Col>
                            <Col>{events.FarmListGold.lists[l].listType ?? '?'}</Col>
                            <Col>
                                <Form.Check
                                    type="checkbox"
                                    id={`send-${l}`}
                                    name={`send-${l}`}
                                    checked={bot.bot.conf.FarmListGold.lists[l] && bot.bot.conf.FarmListGold.lists[l].needSend ? 1 : 0}
                                    value="1"
                                    onChange={e => {
                                        e.target.checked ? bot.bot.conf.FarmListGold.lists[l].needSend = 1 : bot.bot.conf.FarmListGold.lists[l].needSend = 0
                                        bot.setBot(bot.bot)
                                    }}
                                />
                            </Col>
                            <Col>
                                {
                                    events.FarmListGold.lists[l].lastSend ? new Date(events.FarmListGold.lists[l].lastSend).toLocaleTimeString() : "-"
                                }
                            </Col>
                        </Row>
                        )}
                    </div>
                    :
                    <span>You need to create Gold Club lists.</span>
                :
                <span>You need to activate Gold Club to send farm lists.</span>}
        </div>
    );
});

export default BotGoldFarm;