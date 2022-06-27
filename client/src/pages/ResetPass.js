import React, {useContext, useRef, useState} from 'react';
import {Button, Container, Form,Row,Col} from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import {LOGIN_ROUTE, REGISTRATION_ROUTE,RESETPASS_ROUTE} from "../utils/consts";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {resetPass} from "../http/userAPI";
import ReCAPTCHA from "react-google-recaptcha";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import ReactGA from "react-ga";

const ResetPass = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email,setEmail] = useState('')
    const [captchaToken,setCaptchaToken] = useState('')
    const [errors,setErrors] = useState(false)
    const [msg,setMsg] = useState('')

    function onChangeCaptcha(value) {
        console.log("Captcha value:", value);
        setCaptchaToken(value)
    }

    function resetCaptcha(el) {
        console.log("Reset captcha");
        el.reset()
    }
    const recaptchaInputRef = useRef({});
    const click = async ()=>{
        let data
        try{
            data = await resetPass(email,captchaToken)
            ReactGA.event({category: 'User', action: 'ResetPass'});
        }catch (e) {
            alert(e.response.data.message)
        }
        setErrors(false)
        if(data.errors) {
            setErrors(true)
            recaptchaInputRef.current.reset();
        }
        setMsg('')
        if(data.msg) setMsg(data.msg)
    }

    document.title = 'Travian Bot & elephants, croppers, oases finder';
    return(
        <Container
            className = "d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">Reset password</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-2"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <ReCAPTCHA
                        sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                        ref={recaptchaInputRef}
                        className="mt-2"
                        onChange={onChangeCaptcha}

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
                                    : <span  className={"text-success"}>{msg}</span>
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
                                disabled={!captchaToken || !email ? 1 : 0}
                            >
                                Reset password
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default ResetPass;