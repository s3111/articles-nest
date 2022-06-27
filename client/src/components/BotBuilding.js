import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Col, Form, Row, Tab, Tabs} from "react-bootstrap";
import {Buildings} from "../utils/consts";
//import BotManage from "./BotManage";
//import BotOrderTroops from "./BotOrderTroops";
//import BotGoldFarm from "./BotGoldFarm";
import {Context} from "../index";

const BotBuilding = observer(() => {
    const {bot} = useContext(Context)
    //let race
    let stat = {}
    let conf ={}
    if(!bot.bot.events.Villages)return <div>Wrong events.Villages</div>
    /*
    if(bot.bot.conf) {
        //race = bot.bot.conf.Account.race
        conf = bot.bot.conf
    }
    else{
        console.log('Wrong conf building',bot.bot)
    }

     */
    //if(bot.bot.stat) stat = bot.bot.stat
    function BldSelect(props) {

        return <Form.Control
            size="sm"
            as="select"
            //key={`bldSel-${props.did}-${props.slot}`}
            //value={bot.bot.conf.Villages[props.did].BuildQueue[props.slot] && bot.bot.conf.Villages[props.did].BuildQueue[props.slot].bldType ? bot.bot.conf.Villages[props.did].BuildQueue[props.slot].bldType : ""}
            value={props.value}
            onChange={e => {
                if(!bot.bot.conf.Villages[props.did].BuildQueue[props.slot]) bot.bot.conf.Villages[props.did].BuildQueue[props.slot] = {}
                bot.bot.conf.Villages[props.did].BuildQueue[props.slot].bldType = e.target.value
                bot.setBot(bot.bot)
                console.log('bld sel change',e.target.value)
            }}
        >
            <option value="">-</option>

            {Object.keys(Buildings).map(i =>
                <option
                    key={i}
                    value={i}
                >
                    {Buildings[i][1]}
                </option>
            )}
        </Form.Control>;
    }
    return (
        <div>
            <Tabs
                //defaultActiveKey={Object.keys(bot.bot.events.Villages)[0]}
                defaultActiveKey = {0}
                transition={false}
                id="build-tab"
                className="mb-3 mt-5"
                //variant="pills"
                //className={"mt-5"}
                //activeKey={Object.keys(bot.bot.events.Villages)[0]}
            >
                {
                    Object.keys(bot.bot.events.Villages).map((did, i )=>{
                        if(!bot.bot.conf.Villages[did].BuildQueue) bot.bot.conf.Villages[did].BuildQueue = {}
                        //console.log(bot.bot.conf.Villages[did].BuildQueue)
                        return <Tab eventKey={i} title={bot.bot.events.Villages[did] ? bot.bot.events.Villages[did].state.name : "did:" + did} key={did}>
                            {bot.bot.events.Villages[did] ? bot.bot.events.Villages[did].state.name : "did:" + did}
                            {bot.bot.events.Villages[did].currentBuildings ?
                                <div>
                                    {Object.keys(bot.bot.events.Villages[did].currentBuildings).map(slot =>{
                                            let maxLvl =
                                                (Buildings[bot.bot.events.Villages[did].currentBuildings[slot].bldType] && Buildings[bot.bot.events.Villages[did].currentBuildings[slot].bldType][2]) ?
                                                    Buildings[bot.bot.events.Villages[did].currentBuildings[slot].bldType][2] : 20
                                            let currLvl = bot.bot.events.Villages[did].currentBuildings[slot].level ? bot.bot.events.Villages[did].currentBuildings[slot].level : 0
                                            let avaliableLvls = []
                                            for(let i = currLvl+1; i <= maxLvl; i++) avaliableLvls.push(i)

                                            let bgColor = {}
                                            if(Buildings[bot.bot.events.Villages[did].currentBuildings[slot].bldType]) {
                                                if (Buildings[bot.bot.events.Villages[did].currentBuildings[slot].bldType][0] === 1) bgColor = {backgroundColor: '#e6f2ff'}
                                                else if (Buildings[bot.bot.events.Villages[did].currentBuildings[slot].bldType][0] === 2) bgColor = {backgroundColor: '#ffebe6'}
                                                else if (Buildings[bot.bot.events.Villages[did].currentBuildings[slot].bldType][0] === 3) bgColor = {backgroundColor: '#e6ffe6'}
                                            }
                                        //console.log(slot,parseInt(slot),parseInt(slot)-19)
                                            //if(!bot.bot.conf.Villages[did].BuildQueue[slot]) bot.bot.conf.Villages[did].BuildQueue[slot] = {}
                                            return(
                                                <Row
                                                    key={`row-${did}-${slot}`}
                                                    className={"mt-1"}
                                                >
                                                    <Col xs="auto">{slot}</Col>

                                                    <Col style={bgColor}
                                                    >{
                                                        Buildings[bot.bot.events.Villages[did].currentBuildings[slot].bldType] ?
                                                            Buildings[bot.bot.events.Villages[did].currentBuildings[slot].bldType][1]
                                                            :
                                                            <BldSelect
                                                                key={`bldSel-${did}-${slot}`}
                                                                did={did}
                                                                slot={slot}
                                                                value={bot.bot.conf.Villages[did].BuildQueue[slot] && bot.bot.conf.Villages[did].BuildQueue[slot].bldType ? bot.bot.conf.Villages[did].BuildQueue[slot].bldType : ""}
                                                            />
                                                        //Buildings[11][1]
                                                    }</Col>
                                                    <Col xs="1">{bot.bot.events.Villages[did].currentBuildings[slot].level}</Col>
                                                    <Col xs="4">
                                                        <Form.Control
                                                            size="sm"
                                                            as="select"
                                                            key={`lvl-${did}-${slot}`}
                                                            value={bot.bot.conf.Villages[did].BuildQueue[slot] && bot.bot.conf.Villages[did].BuildQueue[slot].level ? bot.bot.conf.Villages[did].BuildQueue[slot].level : ""}
                                                            onChange={e => {
                                                                if(!bot.bot.conf.Villages[did].BuildQueue[slot]) bot.bot.conf.Villages[did].BuildQueue[slot] = {}
                                                                bot.bot.conf.Villages[did].BuildQueue[slot].level = e.target.value
                                                                bot.setBot(bot.bot)
                                                                console.log('lvl sel change',e.target.value)
                                                            }}
                                                        >
                                                            <option value="">-</option>

                                                            {avaliableLvls.map(i =>
                                                                <option
                                                                    key={i}
                                                                    value={i}
                                                                >
                                                                    {i}
                                                                </option>
                                                            )}
                                                        </Form.Control>
                                                    </Col>

                                                </Row>

                                            )
                                        }
                                    )}
                                </div>
                                :
                                "Is no current buildings for this village"}
                        </Tab>
                    }
                )
                }
            </Tabs>
        </div>
    );
});

export default BotBuilding;