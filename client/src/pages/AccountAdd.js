import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Row, Container, Form, ProgressBar} from "react-bootstrap";
import {Context} from "../index";
import {createAcc,fetchAccs} from "../http/accAPI";
import {observer} from "mobx-react-lite";
//import {BOT_ROUTE, Units, USER_ROUTE} from "../utils/consts";
import {NavLink, useHistory} from "react-router-dom";
import Card from "react-bootstrap/Card";
import ZoneBar from "../components/ZoneBar";
import ServerBar from "../components/ServerBar";
import {fetchServers, fetchZones} from "../http/elephantAPI";
import ReactGA from "react-ga";
import {fetchBots} from "../http/botAPI";
import {BOT_ROUTE} from "../utils/consts";

const AccountAdd = observer(() => {
    const {user,servers,accs} = useContext(Context)
    user.setSearchType('Accounts')

    useEffect(() => {
        fetchZones('Accounts').then(data => servers.setZones(data))
        fetchAccs().then(data => accs.setAccs(data))
    },[])

    useEffect(()=>{
        fetchServers('Accounts',servers.selectedZone.zone,servers.page,servers.limit).then(data => {
            servers.setServers(data.rows)
            servers.setTotalCount(data.count)
            //ReactGA.pageview(window.location.pathname + window.location.search);
        })
    },[servers.selectedZone])

    let ogTitle = 'Add account to scan server'
    let ogDescription = 'All Travian servers start dates and scan results'
    let ogImage = 'oases473.png'
    const history = useHistory()
    //const [server,setServer] = useState('')
    const [login, setLogin] = useState('')
    const [pass, setPass] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    const addAcc = () => {
        let server = servers.selectedServer.server
        console.log(server,login,pass)
        //createBot({server,login,pass,proxyIp,proxyPort,proxyType,proxyLogin,proxyPass}).then(data => {
        createAcc({server,login,pass}).then(data => {
            if(data.accCreated){
                //user.setBalance(data.balance)
                setTimeout(function(){
                //    history.push(BOT_ROUTE)
                    fetchAccs().then(data => accs.setAccs(data))
                }, 100)
            }
            else setErrorMsg(data.errorMsg)
        })
    }
    document.title = 'Travian Bot & elephants, croppers, oases finder';
    console.log('accs',accs)
    return (
        <Container>
                <ZoneBar/>
                <ServerBar/>
                <Card style={{maxWidth: 600}} className="p-5 m-3">
                    <div>I have such account in Travian and want to add it.</div>
                    <Form>
                        <div className="mt-3">
                            {servers.selectedServer.server
                                ? <a href={'https://' + servers.selectedServer.server} target={"_blank"}>{servers.selectedServer.server}</a>
                                : 'Please select server from list'
                            }
                        </div>
                        <Form.Control
                            className="mt-3"
                            placeholder="Travian Login"
                            value={login}
                            onChange={e=> setLogin(e.target.value)}
                            disabled = {!user.isAuth || !user.info.isActivated }
                        />
                        <Form.Control
                            className="mt-3"
                            placeholder="Travian Pass"
                            value={pass}
                            onChange={e=> setPass(e.target.value)}
                            disabled = {!user.isAuth || !user.info.isActivated }
                        />

                        <Button
                            className="mt-3"
                            variant="outline-primary"
                            onClick={addAcc}
                            disabled = {!user.isAuth || !user.info.isActivated || !pass || !login}
                        >Add account</Button>
                        <hr/>
                        {errorMsg ?
                            <Col className="mt-3">
                                {errorMsg}
                            </Col>
                            :
                            !user.info.isActivated ?
                                <Col className="mt-3">You need to check email and activate your account to add new bots.</Col>
                                :
                                null
                        }
                    </Form>
                </Card>
            {accs.accs && accs.accs.length ?
                <Card style={{maxWidth: 600}} className="p-5 m-3">
                    <div>Already added accounts</div>
                    {accs.accs.map(i =>
                    <Row key={i.id} >
                        <Col>
                            <span>{i.login}</span>
                        </Col>
                        <Col>
                            {i.server.replace('.travian.com','')}
                        </Col>
                        <Col>
                            {i.ban ? <span className={'text-danger'}>banned </span> : null}
                        </Col>
                    </Row>
                    )}
                </Card>
                : null
            }

        </Container>
    );
});

export default AccountAdd;