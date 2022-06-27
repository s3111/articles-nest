import React, {useContext, useState} from 'react';
import {Button, Col, Row, Container, Form} from "react-bootstrap";
import {Context} from "../index";
import {createBot} from "../http/botAPI";
import {observer} from "mobx-react-lite";
import {BOT_ROUTE, Units, USER_ROUTE} from "../utils/consts";
import {NavLink, useHistory} from "react-router-dom";
import Card from "react-bootstrap/Card";

const BotCreate = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()
    const [server,setServer] = useState('')
    const [login, setLogin] = useState('')
    const [pass, setPass] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    const [userProxy, setUserProxy] = useState(false)
    const [proxyArr, setProxyArr] = useState([])
    const [proxyIp, setProxyIp] = useState('')
    const [proxyPort, setProxyPort] = useState('')
    const [proxyLogin, setProxyLogin] = useState('')
    const [proxyPass, setProxyPass] = useState('')
    const [proxyType, setProxyType] = useState('http')

    const addBot = () => {
        console.log(server,login,pass)
        //createBot({server,login,pass,proxyIp,proxyPort,proxyType,proxyLogin,proxyPass}).then(data => {
        createBot({server,login,pass,proxyArr}).then(data => {
            if(data.botCreated){
                user.setBalance(data.balance)
                setTimeout(function(){
                    history.push(BOT_ROUTE)
                }, 100)
            }
            else setErrorMsg(data.errorMsg)
        })
    }
    const addProxy = () => {
        //console.log(proxyIp,proxyPort,proxyType,proxyLogin,proxyPass)
        setProxyArr([...proxyArr,{ip:proxyIp,port:proxyPort,type:proxyType,login:proxyLogin,pass:proxyPass}])
        console.log(proxyArr)
        setProxyType('http')
        setProxyIp('')
        setProxyPort('')
        setProxyLogin('')
        setProxyPass('')
    }
    const delProxy = (e) => {
        //console.log(proxyIp,proxyPort,proxyType,proxyLogin,proxyPass)
        let arr = [...proxyArr]
        arr.splice(e.target.value,1)
        setProxyArr([...arr])
        console.log(proxyArr)
    }
    document.title = 'Travian Bot & elephants, croppers, oases finder';
    return (
        <Container
            className = "d-flex justify-content-center align-items-center mt-5"
            //style={{height: window.innerHeight - 54}}
        >
            <Card style={{maxWidth: 600}} className="p-5">
                <Form>
                    <Form.Control
                        className="mt-3"
                        placeholder="Server e.g. ts7.x1.international.travian.com"
                        value={server}
                        onChange={e=> setServer(e.target.value)}
                        disabled = {!user.isAuth || !user.info.isActivated || user.info.balance < user.info.prices.createBot }
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Travian Login"
                        value={login}
                        onChange={e=> setLogin(e.target.value)}
                        disabled = {!user.isAuth || !user.info.isActivated || user.info.balance < user.info.prices.createBot }
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Travian Pass"
                        value={pass}
                        onChange={e=> setPass(e.target.value)}
                        disabled = {!user.isAuth || !user.info.isActivated || user.info.balance < user.info.prices.createBot }
                    />

                    <Form.Check
                        type="checkbox"
                        id={"userProxy"}
                        className="mt-3"
                        name={"userProxy"}
                        checked={userProxy ? 1 : 0}
                        value="0"
                        label = {"I want to use own proxy"}
                        onChange={e=> setUserProxy(e.target.checked)}
                        disabled = {!user.isAuth || !user.info.isActivated || user.info.balance < user.info.prices.createBot }
                    />
                    {userProxy ?
                        <Card className="p-3">
                            <Row>
                                <Col>
                                    {proxyArr ? proxyArr.map((i,k )=>
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
                                                    disabled = {!user.isAuth || !user.info.isActivated || user.info.balance < user.info.prices.createBot }
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
                                        disabled = {!user.isAuth || !user.info.isActivated || user.info.balance < user.info.prices.createBot }
                                    />
                                </Col>
                                <Col>
                                    <Form.Control
                                        className="mt-3"
                                        placeholder="Proxy port"
                                        value={proxyPort}
                                        onChange={e=> setProxyPort(e.target.value)}
                                        disabled = {!user.isAuth || !user.info.isActivated || user.info.balance < user.info.prices.createBot }
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
                                        disabled = {!user.isAuth || !user.info.isActivated || user.info.balance < user.info.prices.createBot || proxyType === 'socks4' || proxyType === 'socks5'}
                                    />
                                </Col>
                                <Col>
                                    <Form.Control
                                        className="mt-3"
                                        placeholder="Proxy pass (optional)"
                                        value={proxyPass}
                                        onChange={e=> setProxyPass(e.target.value)}
                                        disabled = {!user.isAuth || !user.info.isActivated || user.info.balance < user.info.prices.createBot  || proxyType === 'socks4' || proxyType === 'socks5'}
                                    />
                                </Col>
                            </Row>

                            <Button
                                className="mt-3"
                                variant="outline-primary"
                                onClick={addProxy}
                                disabled = {!user.isAuth || !user.info.isActivated || user.info.balance < user.info.prices.createBot || proxyArr.length > 3 }
                            >Add proxy</Button>
                        </Card>
                        : null
                    }
                    <Button
                        className="mt-3"
                        variant="outline-primary"
                        onClick={addBot}
                        disabled = {!user.isAuth || !user.info.isActivated || user.info.balance < user.info.prices.createBot }
                    >Add bot</Button>
                    <hr/>
                    {errorMsg ?
                        <Col className="mt-3">
                            {errorMsg}
                        </Col>
                        :
                        !user.info.isActivated ?
                            <Col className="mt-3">You need to check email and activate your account to add new bots.</Col>
                            :
                            user.info.balance < user.info.prices.createBot ?
                                <Col className="mt-3">
                                    <div>Bot creation costs {user.info.prices.createBot} points.</div>
                                    <div>You need to <NavLink to={USER_ROUTE}>add points</NavLink> to create new bots.</div>
                                </Col>
                                :
                                <Col>
                                    The bot will start in 2-3 minutes
                                </Col>
                    }
                </Form>
            </Card>
        </Container>
    );
});

export default BotCreate;