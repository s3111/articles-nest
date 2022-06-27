import React, {useContext, useEffect} from 'react';
import '../assets/new-age.css';
import '../assets/simple-line-icons/css/simple-line-icons.css'
import {BOT_ROUTE, LOGIN_ROUTE,USER_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useHistory} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Footer from "../components/Footer";
import {Container, Row, Col, Card} from "react-bootstrap";
import {fetchNews} from "../http/newsAPI";
import ReactGA from "react-ga";

const Home = observer(() => {
    const {user,news} = useContext(Context)
    const history = useHistory()
    useEffect(() => {
        fetchNews('All').then(data => news.setNews(data))
        ReactGA.pageview(window.location.pathname + window.location.search);
        //console.log(news)
    },[])
    document.title = 'Travian Bot & elephants, croppers, oases finder';
    return (
        <div>
            <section className=" download">
                <div className="container h-100">
                    <div className="col-lg-8 my-auto mx-auto text-center">
                        <div className="header-content ">
                            <h1 className="mb-5">Travian Bot</h1>
                            <div>Play on any device! Mac, Windows, Android or something else!</div>
                            <Button onClick={() => history.push(
                                user.isAuth ?
                                    user.info.balance > 10 ?
                                        BOT_ROUTE
                                        : USER_ROUTE
                                    : LOGIN_ROUTE
                            )} style={{cursor:'pointer'}} className="btn btn-outline btn-xl js-scroll-trigger">Start Now!</Button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container" id="download">
                    <Row className="row">
                        <Col className="text-center ">
                            <h3 className="section-heading"><a href={"https://travian4bot.com/news/how-to-start-bot/"}>How to start Bot?</a></h3>
                            {
                                /*
                            <p>Bot is available on any mobile and desktop devices!</p>
                            <h4>1. Register</h4><p> and add points</p>
                            <h4>2. Config your bots</h4> <p>You might also want to use a proxy</p>
                            <h4>3. Enjoy the game</h4> Your bot will order and send troops, build, relocate resources etc. even when your device is offline
                                */
                            }
                        </Col>
                        <Col className="text-center ">
                            <h3 className="section-heading"><a href={"https://travian4bot.com/news/finder/"}>How to find elephants?</a></h3>
                            {
                                /*
                            <p>Search for elephants, croppers or oases near your villages on any Travian server!</p>
                            <h4>1. Register</h4><p> and add points</p>
                            <h4>2. Select server</h4> <p> and coordinates</p>
                            <h4>3. Press Search :)</h4>
                                */
                            }
                        </Col>
                        <Col>
                            <h3 className="section-heading"><a href={"https://travian4bot.com/news/bot-features/"}>Bot features</a></h3>
                        </Col>
                    </Row>
            </section>
            {news.news && news.news.forum && news.news.forum.length
                ? <section className="container" id="download">
                    <h3 className="section-heading">Last forum topics</h3>
                    <Row>
                        {news.news.forum.map( (n,k) =>
                            <Card
                                key={k}
                                className="p-2 d-inline m-1"
                                //style={{cursor: 'pointer',}}
                                //onClick={()=> servers.setSelectedZone(zone)}
                                //border={zone.zone === servers.selectedZone.zone ? 'primary':'light'}
                            >

                                <a href={n.url} target={"_blank"} className="font-weight-bold">
                                    {n.title}
                                </a><br/><span className="text-secondary" style={{fontSize: 'small'}}>{n.updated}</span>
                            </Card>
                        )}

                    </Row>
                </section>
                : null
            }
            <section className="features" id="features">
                <div className="container">
                    <div className="section-heading text-center">
                        <h3>Bot: <a href={"https://travian4bot.com/news/bot-features/"}>New Features</a>, Unlimited Fun</h3>
                        <p className="text-muted"><a href={"https://travian4bot.com/news/bot-features/"}>Check out what you can do with Travian Bot!</a></p>
                        <hr/>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 my-auto mx-auto">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="feature-item">
                                            <i className="icon-wrench text-primary"></i>
                                            <h3>Building</h3>
                                            <p className="text-muted">The bot will evenly distribute resources between the villages. Will build buildings and resource fields.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="feature-item">
                                            <i className="icon-shield text-primary"></i>
                                            <h3>Order troops</h3>
                                            <p className="text-muted">The bot will train troops in barracks, stables and workshops.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="feature-item">
                                            <i className="icon-present text-primary"></i>
                                            <h3>Loyal price</h3>
                                            <p className="text-muted">We are testing new features. The cost of using the bot is very low.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="feature-item">
                                            <i className="icon-refresh text-primary"></i>
                                            <h3>Gold Club Farm</h3>
                                            <p className="text-muted">You can add farms to Gold Farm lists using a bot.
                                                You can select the lists that the bot will periodically send.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cta">
                <div className="cta-content">
                    <div className="container">
                        <h2>Stop waiting.<br/>Start playing.</h2>
                        <Button onClick={() => history.push(
                            user.isAuth ?
                                user.info.balance > 10 ?
                                    BOT_ROUTE
                                    : USER_ROUTE
                                : LOGIN_ROUTE
                        )} style={{cursor:'pointer'}} className="btn btn-outline btn-xl js-scroll-trigger">Let's Get Started!</Button>
                    </div>
                </div>
                <div className="overlay"></div>
            </section>
            <section className="contact bg-light" id="contact">
                <div className="container">
                    <h2>We <i className="icon-heart text-primary"></i> new friends!</h2>
                    <h3>
                        <b>Join Travian Bot: <a href="https://discord.gg/vX4uxzTKTA">Discord</a>, <a href="https://www.facebook.com/travian4bot/">Facebook</a>, <a href="https://travian4bot.com/forum/">Forum</a>
                        </b>
                    </h3>
                </div>
            </section>
            <footer>
                <Footer/>
            </footer>
            {
                /*
                 */
            }
        </div>
    );
});

export default Home;