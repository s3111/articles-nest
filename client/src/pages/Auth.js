import React, {useContext, useState} from 'react';
import {Button, Container, Form,Row,Col} from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import {ELEPHANT_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, RESETPASS_ROUTE} from "../utils/consts";
//import Row from "react-bootstrap/Row";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import ReactGA from "react-ga";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const click = async ()=>{
        try{
            //let data
            if(isLogin){
                await login(email,password)
                ReactGA.event({category: 'User', action: 'Login'});
            }else{
                await registration(email,password)
                ReactGA.event({category: 'User', action: 'Register'});
            }
            user.setUser(user)
            user.setIsAuth(true)
            history.push(ELEPHANT_ROUTE)
        }catch (e) {
            alert(e.response.data.message)
        }
    }
    document.title = 'Travian Bot & elephants, croppers, oases finder';
    return(
        <Container
            className = "d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin? 'Login' : 'Registration'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-2"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-2"
                        placeholder="Password"
                        value={password}
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Row
                        //className="d-flex justify-content-between pl-2 pr-2 mt-1"
                        className="pl-2 pr-2 mt-1"
                    >
                        {isLogin ?
                            <Col>
                                Dont have an account? <NavLink to={REGISTRATION_ROUTE}>Register</NavLink>
                                <NavLink className="float-right" to={RESETPASS_ROUTE}>Reset password</NavLink>
                            </Col>
                        :
                            <Col>
                                Have an account? <NavLink to={LOGIN_ROUTE}>Login</NavLink>
                            </Col>
                        }
                    </Row>
                    <Row className="">
                        <Col>
                            <Button
                                variant="outline-primary"
                                className="float-right mt-3"
                                onClick={click}
                            >
                                {isLogin ? 'Login': 'Registration'}
                            </Button>
                        </Col>
                    </Row>

                </Form>
            </Card>
        </Container>
    );
});

export default Auth;