import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {HOME_ROUTE, ARTICLES_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {useNavigate,useLocation} from 'react-router-dom'


const NavBar = observer(() => {
    //const {user} = useContext(Context)
    const navigate = useNavigate()
    const location = useLocation();

    //let ogTitle = ''
    //let ogDescription = ''
    //let ogImage = ''
    let wlp = location.pathname
    return (
        <div>
            <Navbar bg="primary" variant="dark"  collapseOnSelect expand="sm" >
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link onClick={() => navigate(HOME_ROUTE)}
                                  style={wlp.includes(HOME_ROUTE) ? {cursor:'pointer',color: '#fff'} : {cursor:'pointer',color: '#eee'}}
                        >Home</Nav.Link>
                        <Nav.Link onClick={() => navigate(ARTICLES_ROUTE)}
                                  style={wlp.includes(ARTICLES_ROUTE) ? {cursor:'pointer',color: '#fff'} : {cursor:'pointer',color: '#eee'}}
                        >Articles</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Toggle className="ml-auto" aria-controls="responsive-navbar-nav" />
            </Navbar>
        </div>
    );
});

export default NavBar;