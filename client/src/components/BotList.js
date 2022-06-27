import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import  {Button, Col, Row, ProgressBar} from "react-bootstrap";
import '../assets/style.css';
import {fetchBots} from "../http/botAPI";
import {BOT_ROUTE} from "../utils/consts";
import {useHistory} from "react-router-dom";

const BotList = observer(() => {
    const {bot,user} = useContext(Context)
    const history = useHistory()
    useEffect(() => {
        fetchBots().then(data => bot.setBots(data))
    },[])

    if (!bot.bots.length || !user.info.isActivated){
        return (
            <Col>
                {!user.info.isActivated ? <div className={"font-weight-bold mt-3"}>You need to check email and activate your account to create new bots.</div> : null}
                <Button
                    onClick={() => history.push(BOT_ROUTE + '/create')}
                    className="mt-4"
                    disabled = { !user.info.isActivated }
                >
                    Create new bot
                </Button>
            </Col>
        )
    }
    else {
        return (
            <Col className="flex px-0">
                <Button
                    //variant={"outline-light"}
                    onClick={() => history.push(BOT_ROUTE + '/create')}
                    className="mt-4"
                >
                    Create new bot
                </Button>
                <Row className="mt-3 font-weight-bold merged">
                    <Col className={"col-3"}>Login @ Server</Col>
                    <Col>
                        <Row>
                            <Col  className={"col-3"}>Vill (Resid/Settl)</Col>
                            <Col>Att</Col>
                            <Col>Bld</Col>
                            <Col>
                                <i className={'r1'}></i>
                                <i className={'r4'}></i>
                                <i className={'r7'}></i>
                                <i className={'r10'}></i>
                            </Col>
                            {
                                /*
                            <Col><i className={'r1'}></i></Col>
                            <Col><i className={'r4'}></i></Col>
                            <Col><i className={'r7'}></i></Col>
                            <Col><i className={'r10'}></i></Col>

                                */
                            }
                        </Row>
                    </Col>
                </Row>
                {bot.bots.map(i =>
                    <Row key={i.id} className={"mt-5"}>
                        <Col xs={12} sm={3}>
                            <a
                                className={'text-primary'}
                                onClick={()=> history.push(BOT_ROUTE+'/'+i.id)}
                                style={{cursor:'pointer'}}
                            >
                                <span className={'font-weight-bold'}>{i.login}</span> @ {i.server.replace('.travian.com','')}
                            </a>
                            <br />
                            {i.events && i.events.Account ?
                                <span>
                                    <span className={"mr-2"}><i className={'icon-people'}></i>{i.events.Account.pop}</span>
                                    <span className={"mr-2"}><i className={'gold'}></i>{i.events.Account.gold}</span>
                                    <div className={"mr-2 d-inline"}><i className={'silver'}></i>{i.events.Account.silver}</div>

                                    {i.events.Account.villSlots && i.events.Account.villSlots.slot1 && i.events.Account.villSlots.slot2
                                        ?   <div className={'mr-2 d-inline-block'}>
                                                {i.events.Account.villSlots.slot1 < i.events.Account.villSlots.slot2
                                                    ? <span className={'font-weight-bold'}><i className={'icon-home'}></i>{i.events.Account.villSlots.slot1}/{i.events.Account.villSlots.slot2}</span>
                                                    : <span className={'          '}><i className={'icon-home'}></i>{i.events.Account.villSlots.slot1}/{i.events.Account.villSlots.slot2}</span>
                                                }
                                            </div>
                                        : null
                                    }
                                    {i.events.Account.clubActive ? <span className={"text-warning mr-2"}>Club</span> : null}
                                    {i.events.Account.race && i.events.Account.race !== '?'
                                        ? /* <i className={`${i.events.Account.race}_medium`}></i> */ <div className={'mr-2 d-inline-block'}>{i.events.Account.race}</div>
                                        : null
                                    }
                                </span>
                                :
                                null
                            }
                            {i.ban ? <span className={'text-danger'}>banned </span> : null}
                            (id:&nbsp;{i.id})
                        </Col>
                        <Col  xs={12} sm={9}>

                            {(i.events && i.events.Villages) ? Object.keys(i.events.Villages).map((did, keyIndex) =>
                                <Row key={did} >
                                    <Col  sm={3} >{i.events.Villages[did].state && i.events.Villages[did].state.name ? i.events.Villages[did].state.name.substring(0, 10) : 'did: '+did}</Col>
                                    <Col>
                                        {i.events.Villages[did].attacks ?
                                            <span>
                                                {i.events.Villages[did].attacks.att1 ? <span><i className={'att1'}></i></span> : null}
                                                {i.events.Villages[did].attacks.att2 ? <span><i className={'att2'}></i></span> : null}
                                                {i.events.Villages[did].attacks.def1 ? <span><i className={'def1'}></i></span> : null}
                                                {i.events.Villages[did].attacks.def2 ? <span><i className={'def2'}></i></span> : null}
                                            </span>
                                        : null}
                                    </Col>
                                    <Col>
                                        {i.events.Villages[did].bldDuration && i.events.Villages[did].bldDuration[0] && i.events.Villages[did].bldDuration[0][1]  && i.events.Villages[did].bldDuration[0][1]* 1000 >Date.now() ? <span><i className={'bau'}></i></span> : null}
                                        {i.events.Villages[did].bldDuration && i.events.Villages[did].bldDuration[1] && i.events.Villages[did].bldDuration[1][1]  && i.events.Villages[did].bldDuration[1][1]* 1000 >Date.now() ? <span><i className={'bau'}></i></span> : null}
                                    </Col>
                                    <Col>
                                        {i.events.Villages[did].resources && i.events.Villages[did].resources.lum && i.events.Villages[did].whCap
                                            ? <ProgressBar now={i.events.Villages[did].resources.lum/i.events.Villages[did].whCap*100} variant={'success'} style={{height: '5px'}}/>
                                            : null
                                        }
                                        {i.events.Villages[did].resources && i.events.Villages[did].resources.clay && i.events.Villages[did].whCap
                                            ? <ProgressBar now={i.events.Villages[did].resources.clay/i.events.Villages[did].whCap*100} variant={'success'} style={{height: '5px'}}/>
                                            : null
                                        }
                                        {i.events.Villages[did].resources && i.events.Villages[did].resources.iron && i.events.Villages[did].whCap
                                            ? <ProgressBar now={i.events.Villages[did].resources.iron/i.events.Villages[did].whCap*100} variant={'success'} style={{height: '5px'}}/>
                                            : null
                                        }
                                        {i.events.Villages[did].resources && i.events.Villages[did].resources.crop && i.events.Villages[did].grCap
                                            ? <ProgressBar now={i.events.Villages[did].resources.crop/i.events.Villages[did].grCap*100} variant={'success'} style={{height: '5px'}}/>
                                            : null
                                        }
                                    </Col>
                                    {
                                        /*
                                    <Col className={"text-right"}>{i.events.Villages[did].resources ? i.events.Villages[did].resources.lum : null}</Col>
                                    <Col className={"text-right"}>{i.events.Villages[did].resources ? i.events.Villages[did].resources.clay : null}</Col>
                                    <Col className={"text-right"}>{i.events.Villages[did].resources ? i.events.Villages[did].resources.iron : null}</Col>
                                    <Col className={"text-right"}>{i.events.Villages[did].resources ? i.events.Villages[did].resources.crop : null}</Col>
                                        */
                                    }
                                </Row>
                                )
                                :
                                null
                            }
                        </Col>
                    </Row>
                )}
            </Col>
        );
    }
});

export default BotList;
