import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Button, Col, Form, Row,Card} from "react-bootstrap";
import {Context} from "../index";
import {deleteBot, updateBot} from "../http/botAPI";
import InputGroup from "react-bootstrap/InputGroup";
import {BOT_ROUTE} from "../utils/consts";
import {useHistory} from "react-router-dom";
//import Card from "react-bootstrap/Card";

const BotManage = observer(() => {
    const {bot} = useContext(Context)
    const history = useHistory()
    const [pauseLen,setPauseLen] = useState(10)

    const [proxyIp, setProxyIp] = useState('')
    const [proxyPort, setProxyPort] = useState('')
    const [proxyLogin, setProxyLogin] = useState('')
    const [proxyPass, setProxyPass] = useState('')
    const [proxyType, setProxyType] = useState('http')
    const [proxyArr, setProxyArr] = useState(bot.bot.proxy)

    const [proxyFormVisible,setProxyFormVisible] = useState(false)
    let events = {}
    let race
    //if(bot.bot.conf) race = bot.bot.conf.Account.race
    if(bot.bot.events){
        events = bot.bot.events
        if(events.Account) race = events.Account.race
        else race = '?'
    }

    const save = async ()=>{
        try{
            //updateBot(bot.bot)
            updateBot({id: bot.bot.id,conf: bot.bot.conf,proxy: bot.bot.proxy})
            console.log('save bot')
        }catch (e) {
            alert(e.response.data.message)
        }
    }

    const pause = ()=>{
        bot.bot.conf.Bot.clientTimeZoneOffset = new Date().getTimezoneOffset()
        if(bot.bot.conf && bot.bot.conf.Bot.pausedTo && bot.bot.conf.Bot.pausedTo > Date.now()) bot.bot.conf.Bot.pausedTo = 0
        else bot.bot.conf.Bot.pausedTo = Date.now() + pauseLen * 60 * 1000
        save()
    }
    const stop = ()=>{
        if(bot.bot.conf && bot.bot.conf.Bot.stopped ) bot.bot.conf.Bot.stopped = false
        else bot.bot.conf.Bot.stopped = true
        save()
    }
    const deleteBotFunc = ()=>{
        try{
            deleteBot(bot.bot.id).then(
                setTimeout(function(){
                    history.push(BOT_ROUTE)
                }, 100)
            )
            console.log('delete bot')
        }catch (e) {
            alert(e.response.data.message)
        }
    }
    const getBotStatus = ()=>{
        if(bot.bot.ban && bot.bot.ban == 2) return "banned"
        else if(bot.bot.conf){
            if(bot.bot.conf.Bot.stopped) return "stopped"
            else if(bot.bot.conf && bot.bot.conf.Bot.pausedTo && bot.bot.conf.Bot.pausedTo > Date.now()) return "paused ("+Math.floor((bot.bot.conf.Bot.pausedTo - Date.now())/1000)+" seconds left)"
            else return "running"
        }else{
            return "Wrong bot conf"
        }
    }
    const proxyForm = ()=>{
        if(proxyFormVisible)
            return <Card className="p-3">
                <Row>
                    <Col>
                        {bot.bot.proxy && bot.bot.proxy.length ? bot.bot.proxy.map((i,k )=>
                            <Row key={k} className={"mb-1"}>
                                <Col>{i.type}</Col>
                                <Col>{i.ip}</Col>
                                <Col>{i.port}</Col>
                                <Col>{i.login}</Col>
                                <Col>{i.pass}</Col>
                                <Col>
                                    <Button
                                        variant="outline-primary"
                                        value={k}
                                        size="sm"
                                        onClick={delProxy}
                                        //disabled = {!user.isAuth || !user.info.isActivated || user.info.balance < user.info.prices.createBot }
                                    >Del</Button>
                                </Col>
                            </Row>
                        ) : null}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Control
                            as="select"
                            className="mt-3"
                            value={proxyType}
                            onChange={e => setProxyType(e.target.value)}
                        >
                            <option value="http">HTTP</option>
                            <option value="https">HTTPS/SSL</option>
                            <option value="socks4">Socks4</option>
                            <option value="socks5">Socks5</option>
                        </Form.Control>
                    </Col>
                    <Col>
                        <Form.Control
                            className="mt-3"
                            placeholder="Proxy IP"
                            value={proxyIp}
                            onChange={e=> setProxyIp(e.target.value)}
                            //disabled = {!user.isAuth || !user.info.isActivated || user.info.balance < user.info.prices.createBot }
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            className="mt-3"
                            placeholder="Proxy port"
                            value={proxyPort}
                            onChange={e=> setProxyPort(e.target.value)}
                            //disabled = {!user.isAuth || !user.info.isActivated || user.info.balance < user.info.prices.createBot }
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Control
                            className="mt-3"
                            placeholder="Proxy login (optional)"
                            value={proxyLogin}
                            onChange={e=> setProxyLogin(e.target.value)}
                            disabled = {proxyType === 'socks4' || proxyType === 'socks5'}
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            className="mt-3"
                            placeholder="Proxy pass (optional)"
                            value={proxyPass}
                            onChange={e=> setProxyPass(e.target.value)}
                            disabled = {proxyType === 'socks4' || proxyType === 'socks5'}
                        />
                    </Col>
                </Row>

                <Button
                    className="mt-3"
                    variant="outline-primary"
                    onClick={addProxy}
                    //disabled = {!user.isAuth || !user.info.isActivated || user.info.balance < user.info.prices.createBot || proxyArr.length > 3 }
                >Add proxy</Button>
            </Card>

        }
    const toggleProxyForm = () => {
        setProxyFormVisible(!proxyFormVisible)
        console.log(proxyFormVisible)
    }
    const addProxy = () => {
        //console.log(proxyIp,proxyPort,proxyType,proxyLogin,proxyPass)
        //setProxyArr([...proxyArr,{ip:proxyIp,port:proxyPort,type:proxyType,login:proxyLogin,pass:proxyPass}])
        bot.bot.proxy.push({ip:proxyIp,port:proxyPort,type:proxyType,login:proxyLogin,pass:proxyPass})
        console.log(bot.bot.proxy)
        //bot.bot.proxy = proxyArr
        //setProxyType('http')
        //setProxyIp('')
        //setProxyPort('')
        //setProxyLogin('')
        //setProxyPass('')
    }
    const delProxy = (e) => {
        //console.log(proxyIp,proxyPort,proxyType,proxyLogin,proxyPass)
        //let arr = [...proxyArr]
        bot.bot.proxy.splice(e.target.value,1)
        //setProxyArr([...arr])
        //bot.bot.proxy = proxyArr
        console.log(bot.bot.proxy)
    }
    return (
        <div>
            <div>
                Manage: {bot.bot.login} @ {bot.bot.server}<br />
                Bot ID: {bot.bot.id}<br/>
                Status: {getBotStatus()}<br />
                Proxy: {bot.bot.proxy && bot.bot.proxy.length ? "user defined" : "Tor proxy used"}
                <a
                    className={'text-primary m-3'}
                    onClick={toggleProxyForm}
                    style={{cursor:'pointer'}}
                >
                    modify
                </a>
                {proxyForm()}

            </div>
            <div className={"mt-2"}>
                Race: { race ?? <span>?</span>}<br />
                Slots: {events.Account && events.Account.villSlots ? <span>{events.Account.villSlots.slot1}/{events.Account.villSlots.slot2}</span> : "?"}<br />
                Gold: {events.Account && events.Account.gold ? events.Account.gold : "?"}<br />
                Population: {events.Account && events.Account.pop ? events.Account.pop : "?"}<br />
                Silver: {events.Account && events.Account.silver ? events.Account.silver : "?"}<br />
                Plus: {events.Account && events.Account.plus ? "active" : "inactive"}<br />
                Gold club: {events.Account && events.Account.clubActive ? "active" : "inactive"}<br />
            </div>
            <Row className="mt-3">
                <Col>
                    <InputGroup >
                        <Form.Control
                            as="select"
                            disabled = {(bot.bot.conf && bot.bot.conf.Bot.pausedTo && bot.bot.conf.Bot.pausedTo > Date.now()) || (bot.bot.conf && bot.bot.conf.Bot.stopped)}
                            value={bot.bot.conf && bot.bot.conf.Bot.pausedTo && bot.bot.conf.Bot.pausedTo > Date.now() ? "paused" : pauseLen}
                            //value={bot.bot.conf && bot.bot.conf.Bot.pausedTo && bot.bot.conf.Bot.pausedTo > Date.now() ? "Paused" : "paused"}
                            onChange={e => setPauseLen(e.target.value)}
                        >
                            {bot.bot.conf && bot.bot.conf.Bot.pausedTo && bot.bot.conf.Bot.pausedTo > Date.now() ?
                                <option key={0} value="paused">Paused</option> : null}
                            <option key={10} value="10">10 minutes</option>
                            <option key={20} value="20">20 minutes</option>
                            <option key={40} value="40">40 minutes</option>
                            <option key={60} value="60">60 minutes</option>
                            <option key={90} value="90">90 minutes</option>
                            <option key={120} value="120">2 hours</option>
                            <option key={180} value="180">3 hours</option>
                            <option key={240} value="240">4 hours</option>
                            <option key={300} value="300">5 hours</option>
                            <option key={360} value="360">6 hours</option>
                        </Form.Control>
                        <InputGroup.Append>
                            <Button
                                variant="outline-primary"
                                //className="align-self-end m-3"
                                disabled = {bot.bot.conf && bot.bot.conf.Bot.stopped}
                                onClick={pause}
                            >
                                {bot.bot.conf && bot.bot.conf.Bot.pausedTo && bot.bot.conf.Bot.pausedTo > Date.now() ? "Run" : "Pause"}
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
                <Col>
                    <Button
                        variant="outline-primary"
                        //className="align-self-end m-3"
                        onClick={stop}
                    >
                        {bot.bot.conf && bot.bot.conf.Bot.stopped ? "Run" : "Stop"}
                    </Button>
                </Col>
                <Col >
                    <Button
                        variant="outline-danger"
                        //className="align-self-end m-3"
                        onClick={deleteBotFunc}
                    >
                        Delete
                    </Button>
                </Col>
            </Row>
            <div className="mt-3">
                <Row className="font-weight-bold">
                    <Col>Time</Col>
                    <Col>Event</Col>
                </Row>
                {bot.bot.log ? bot.bot.log.slice().map((i,key) =>
                    <Row key={key}>
                        <Col>{(new Date(i.date)).toLocaleString()}</Col>
                        <Col>{i.event}</Col>
                    </Row>
                ) :
                    <Row><Col>There is no log. Wait a few minutes for the bot to start.</Col></Row>
                }
            </div>
        </div>
    );
});

export default BotManage;