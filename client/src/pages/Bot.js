import React, {useContext, useEffect} from 'react';
import {Button, Container, Tab, Tabs} from "react-bootstrap";
//import InputGroup from 'react-bootstrap/InputGroup'
import {useHistory, useParams} from 'react-router-dom'
//import {ELEPHANT_ROUTE, Units} from "../utils/consts"
import {fetchOneBot, updateBot} from "../http/botAPI";
import Footer from "../components/Footer";
//import ReactGA from "react-ga";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import BotOrderTroops from "../components/BotOrderTroops";
import BotGoldFarm from "../components/BotGoldFarm";
import BotManage from "../components/BotManage";
import BotBuilding from "../components/BotBuilding";
import {BOT_ROUTE} from "../utils/consts";
import BotIntervals from "../components/BotIntervals";
import BotVillages from "../components/BotVillages";
import BotAuction from "../components/BotAuction";
import ReactGA from "react-ga";
import BotSmithy from "../components/BotSmithy";

const BotPage = observer(() => {
    //const [bot, setBot] = useState({})
    const history = useHistory()
    const {bot} = useContext(Context)
    const {id} = useParams()
    const save = async ()=>{
        try{
            updateBot({id: bot.bot.id,conf: bot.bot.conf,proxy: bot.bot.proxy})
            console.log('save bot',bot.bot)
        }catch (e) {
            alert(e.response.data.message)
        }
    }
/*
    const changeBot = (event) => {
        let { name, value } = event.target;
        //setBot(...bot,)
        console.log('change bot',name, value)
    }

 */
/*
    useEffect(()=>{
        fetchOneBot(id).then(data => bot.setBot(data))
    },[id])
*/

    useEffect(() => {
        fetchOneBot(id).then(data => bot.setBot(data))
        ReactGA.pageview(window.location.pathname + window.location.search);
        const interval = setInterval(() => {
            console.log('Update game events');
            //fetchOneBot(id).then(data => bot.setBotEvents(data))
            fetchOneBot(id).then(data => bot.setBot(data))
        }, 240000);
        return () => clearInterval(interval);
    }, [id]);

    //let race
    //let stat = {}
    //if(bot.bot.conf) race = bot.bot.conf.Account.race
    //if(bot.bot.stat) stat = bot.bot.stat
    document.title = 'Travian Bot & elephants, croppers, oases finder';
    return (
        <Container className={"m-0 mt-3"}>
            <div>
                <a
                    className={'text-primary font-weight-bold mr-3'}
                    onClick={()=> history.push(BOT_ROUTE)}
                    style={{cursor:'pointer'}}
                >
                    Dashboard
                </a>
                {bot.bot.Nav ? bot.bot.Nav.map(i =>
                    <div className={"d-inline-block mr-3"} key={i.id}>
                        {i.id == bot.bot.id
                            ? <span>
                                <span className={'font-weight-bold'}>{i.login}</span> @ {i.server.replace('.travian.com','')}
                            </span>
                            : <a
                            key={i.id}
                            className={
                                i.ban && i.ban === 2
                                    ? 'text-secondary'
                                    : 'text-primary'
                            }
                            onClick={()=> history.push(BOT_ROUTE+'/'+i.id)}
                            style={{cursor:'pointer'}}
                            >
                            <span className={'font-weight-bold'}>{i.login}</span> @ {i.server.replace('.travian.com','')}
                            </a>
                        }
                    </div>
                ) : null}
            </div>
            {/*
                <div className={'my-3'}><span className={'font-weight-bold'}>{bot.bot.login} @ {bot.bot.server ?? bot.bot.server.replace('.travian.com','')}</span></div>
                */
            }
            {bot.bot.events && bot.bot.events.Account ?
            <div>
                <Tabs
                    defaultActiveKey="manage"
                    transition={false}
                    id="noanim-tab"
                    className="mb-3 mt-4"
                    variant="pills"
                >
                    <Tab eventKey="manage" title="Manage">
                        <BotManage/>
                    </Tab>
                    <Tab eventKey="troops" title="Troops">
                        {bot.bot.conf
                            ? <BotOrderTroops/>
                            : <div>Wrong bot.conf</div>
                        }
                    </Tab>
                    <Tab eventKey="building" title="Building">
                        {bot.bot.conf ?
                            <BotBuilding/>
                            :
                            <div>Wrong bot.conf building 2</div>
                        }
                    </Tab>
                    <Tab eventKey="gold" title="Gold club"><BotGoldFarm/></Tab>
                    <Tab eventKey="intervals" title="Intervals" disabled><BotIntervals/></Tab>
                    <Tab eventKey="auction" title="Auction"><BotAuction/></Tab>
                    <Tab eventKey="market" title="Market" disabled>Market</Tab>
                    <Tab eventKey="smithy" title="Smithy"><BotSmithy/></Tab>
                    <Tab eventKey="villages" title="Villages" ><BotVillages/></Tab>
                    <Tab eventKey="academy" title="Academy" disabled>Academy</Tab>
                    <Tab eventKey="hero" title="Hero" disabled>Hero</Tab>

                    {
                        /*

                         */
                    }
                </Tabs>
                <Button
                    variant="outline-primary"
                    className="align-self-end mt-3"
                    onClick={save}
                >
                    Save
                </Button>
            </div>
                :
                <div className={"m-4"}>Please wait few minutes until bot start...</div>
            }
            <Footer/>
        </Container>
    );
});

export default BotPage;