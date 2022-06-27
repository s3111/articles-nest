import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/sword-icon-png-7.png"
import {
    BOT_ROUTE,
    CROPPER_ROUTE,
    ELEPHANT_ROUTE,
    FAQ_ROUTE,
    HOME_ROUTE,
    LOGIN_ROUTE,
    OASES_ROUTE, SERVERS_ROUTE,
    USER_ROUTE,
} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {useHistory,useLocation} from 'react-router-dom'
import {Helmet} from "react-helmet";



const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()
    const location = useLocation();
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
    }

    let ogTitle = 'Travian Bot & elephants, croppers, oases finder'
    let ogDescription = 'Travian 4 Bot, crop cells, oases and elephants search on any Travian server'
    let ogImage = 'img_top.png'
    //let wlp = window.location.pathname
    //let wlp = this.props.location.pathname
    let wlp = location.pathname
    return (
        <div>
            <Helmet>
                <title>{ogTitle}</title>
                <meta property="og:title" content={ogTitle} />
                <meta property="og:type" content="website" />
                <meta property="og:description" content={ogDescription} />
                <meta property="og:url" content={window.location.href} />
                <meta name="description" content={ogDescription} />
                <meta name="twitter:card" content={ogImage} />
                <meta name="twitter:title" content={ogTitle} />
                <meta name="twitter:description" content={ogDescription} />
                <meta name="twitter:image" content={ogImage} />
                <meta property="og:image" content={ogImage} />
                <meta property="og:site_name" content="Travian 4 Bot" />
                <meta property="og:locale" content="en_US" />
            </Helmet>
            <Navbar bg="primary" variant="dark"  collapseOnSelect expand="sm" >
                <Navbar.Brand onClick={() => history.push(HOME_ROUTE)} style={{cursor:'pointer'}}>
                    <img src={logo} width="26" height="26" className="d-inline-block align-top" alt="Travian Cells Bot"/>
                </Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link onClick={() => history.push(ELEPHANT_ROUTE)}
                                  style={wlp.includes(ELEPHANT_ROUTE) ? {cursor:'pointer',color: '#fff'} : {cursor:'pointer',color: '#eee'}}
                        >Elephants</Nav.Link>
                        <Nav.Link onClick={() => history.push(CROPPER_ROUTE)}
                                  style={wlp.includes(CROPPER_ROUTE) ? {cursor:'pointer',color: '#fff'} : {cursor:'pointer',color: '#eee'}}
                        >Croppers</Nav.Link>
                        <Nav.Link onClick={() => history.push(OASES_ROUTE)}
                                  style={wlp.includes(OASES_ROUTE) ? {cursor:'pointer',color: '#fff'} : {cursor:'pointer',color: '#eee'}}
                        >Oases</Nav.Link>
                        <Nav.Link onClick={() => history.push(SERVERS_ROUTE)}
                                  style={wlp.includes(SERVERS_ROUTE) ? {cursor:'pointer',color: '#fff'} : {cursor:'pointer',color: '#eee'}}
                        >Servers</Nav.Link>
                        <Nav.Link onClick={() => history.push(user.isAuth ? BOT_ROUTE : LOGIN_ROUTE)}
                                  style={wlp.includes(BOT_ROUTE) ? {cursor:'pointer',color: '#fff'} : {cursor:'pointer',color: '#eee'}}
                        >Bots</Nav.Link>

                        <NavDropdown title="Info" id="collasible-nav-dropdown" className={""}>
                            <NavDropdown.Item href="https://travian4bot.com/news/">News</NavDropdown.Item>
                            <NavDropdown.Item href="https://travian4bot.com/forum/">Forum</NavDropdown.Item>
                            <NavDropdown.Item href="https://discord.gg/vX4uxzTKTA">Discord</NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>
                {user.isAuth
                    ?
                    <Nav className={"ml-auto d-inline"}>
                        <Button variant={"outline-light"} onClick={() => history.push(USER_ROUTE)}
                        >
                            {user.info.name} <i className={"gold"}></i>{user.info.balance}
                        </Button>
                        <Nav.Link className="d-inline" onClick={() => logOut()}><i className={'icon-logout ml-1'}></i></Nav.Link>
                    </Nav>
                    :
                    <Nav className={"ml-auto"}>
                        <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Login</Button>
                    </Nav>
                }
                <Navbar.Toggle className="ml-auto" aria-controls="responsive-navbar-nav" />
            </Navbar>
        </div>
    );
});

export default NavBar;