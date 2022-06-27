import React, {useContext, useState} from 'react';
import {Button, Container, Form,Row,Col} from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import {BOT_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, RESETPASS_ROUTE} from "../utils/consts";
import {NavLink, useHistory, useLocation, useParams} from "react-router-dom";
import {newPass} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const NewPass = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const {passToken} = useParams()
    const [password,setPassword] = useState('')
    const [errors,setErrors] = useState(false)
    const [msg,setMsg] = useState('')

    if(!passToken || passToken.length !== 36){
        history.push(RESETPASS_ROUTE)
    }

    const click = async ()=>{
        let data
        try{
            data = await newPass(password,passToken)
            //ReactGA.event({category: 'User', action: 'ResetPass'});
        }catch (e) {
            alert(e.response.data.message)
        }
        setErrors(false)
        if(data.errors) {
            setErrors(true)
        }
        setMsg('')
        if(data.msg) {
            setMsg(data.msg)
        }
    }
    document.title = 'Travian Bot & elephants, croppers, oases finder';
    return(
        <Container
            className = "d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">New password</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-2"
                        placeholder="Password"
                        value={password}
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Row className="pl-2 pr-2 mt-1">
                        <Col>
                            Dont have an account? <NavLink to={REGISTRATION_ROUTE}>Register</NavLink>
                        </Col>
                    </Row>
                    <Row className="pl-2 pr-2 mt-1">
                        <Col>
                            {msg ?
                                errors ? <span className={"text-danger"}>{msg}</span>
                                    :
                                    msg == 'Password changed' ? <span className={"text-success"}>Password changed. Please <NavLink to={LOGIN_ROUTE}>login</NavLink></span>
                                        : <span className={"text-success"}>{msg}</span>
                                :null
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button
                                variant="outline-primary"
                                className="float-right mt-3"
                                onClick={click}
                                disabled={!password || !passToken ? 1 : 0}
                            >
                                Set password
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default NewPass;