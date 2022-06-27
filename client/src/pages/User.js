import React, {useContext, useState} from 'react';
import {Button, Container, Form} from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import {Context} from "../index";
import {checkout} from "../http/userAPI";
import Footer from "../components/Footer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactGA from "react-ga";
import {observer} from "mobx-react-lite";
import {ADDACC_ROUTE, CROPPER_ROUTE} from "../utils/consts";
import {useHistory} from 'react-router-dom'

//const User = () => {
const UserPage = observer(() => {
    const history = useHistory()
    const [product,setProduct] = useState(2)
    const changeProduct = (event) => {
        let { name, checked, value } = event.target;
        value = parseInt(value)
        if(checked) {
            setProduct(value)
            //console.log(value,product)
        }
    }

    const {user} = useContext(Context)
    const clickCheckout = async ()=>{
        try{
            let data
            ReactGA.event({category: 'User', action: 'Checkout'});
            data = await checkout(product)
            if(data.url) window.location.assign(data.url);
        }catch (e) {
            alert(e.response.data.message)
        }
    }
    const Products = [
        //{id: 1, price: 1.99,  points:   60,  pointsOld:  30, name: 'Lite',item_number: 'item-1'},
        {id: 1, price: 2.99,  points:   90,  pointsOld:  45, name: 'Lite',item_number: 'item-1'},
        {id: 2, price: 4.99,  points:  200,  pointsOld: 100,name: 'Standard',item_number: 'item-2',bestOffer: true},
        {id: 3, price: 9.99,  points:  500,  pointsOld: 250,name: 'Plus',item_number: 'item-3'},
        {id: 4, price: 19.99, points: 1200,  pointsOld: 600,name: 'Large',item_number: 'item-4'},
    ]
    //ReactGA.event({category: 'User', action: 'Open profile'});
    ReactGA.pageview(window.location.pathname + window.location.search);
    document.title = 'Travian Bot & elephants, croppers, oases finder';
    //console.log(user)
    return (
        <Container className="d-flex flex-column ">
            <Card className="mt-3 p-3">
                <div className="mt-3 font-weight-bold">My account</div>
                <div className="mt-3">Email: {user.info.email}</div>
                <div>Balance: <i className={"gold"}></i>{user.info.balance} points</div>
                <div className="mt-3">Create new bot cost: <i className={"gold"}></i>{user.info.prices && user.info.prices.createBot ?user.info.prices.createBot : null} points</div>
                <div className="">Search elephants, croppers or oases cost: <i className={"gold"}></i>{user.info.prices && user.info.prices.search ? user.info.prices.search : null} points</div>
            </Card>
            <Card className="mt-3 p-3 text-success">
                <div className="mt-3 font-weight-bold">Discount!</div>
                <div className="mt-3 font-weight-bold">
                    Buy today - receive double the number of points as bonus!
                </div>
            </Card>
            <Card className="mt-3 p-3">
                <div className="mt-3 p-2">
                    <div className="font-weight-bold mb-2"></div>
                    <Row style={{maxWidth:'400px', borderBottom: '1px solid rgba(0, 0, 0, 0.1)',}}>
                        <Col className="font-weight-bold">Name</Col>
                        <Col className="font-weight-bold text-right"><i className={"gold"}></i> Points</Col>
                        <Col className="font-weight-bold text-right">Price</Col>
                    </Row>
                    {Products.map((prod,i) => (
                        <Row key={i} style={{maxWidth:'400px', borderBottom: '1px solid rgba(0, 0, 0, 0.1)'}}>
                            <Col className="">{prod.name}</Col>
                            <Col className="text-right"><del className="text-secondary">{prod.pointsOld}</del><br/><span className="text-success font-weight-bold">{prod.points}</span></Col>
                            <Col className="text-right"><span className="text-secondary">$</span>{prod.price}</Col>
                        </Row>
                    ))}
                </div>
                <Form className="mt-3 p-2">
                    <div className="font-weight-bold mb-2">Buy points (Stripe)</div>
                    <div className="mb-3 text-secondary">You will be redirected to <b>Stripe</b> payment system (Visa, Mastercard, Google Pay, Apple Pay). <br /> Points will be added immediately after payment.</div>
                    <div key={'product'}>
                        {
                            Products.map(prod =>
                            <Form.Check
                                key={prod.id}
                                type="radio"
                                name="group1"
                                id={`product1-${prod.id}`}
                                label={` ${prod.points} points`}
                                value={prod.id}
                                checked={prod.id === product}
                                onChange={changeProduct}
                            />
                            )
                        }
                    </div>
                    <Button
                        //variant={'outline-primary'}
                        className="mt-3"
                        onClick={clickCheckout}
                    >
                        Add points
                    </Button>
                </Form>
                {
                    /*
                <div className="font-weight-bold mt-4">Buy points (Paypal)</div>
                <div className="mt-2">
                    An alternative payment method - Paypal<br/>
                    Pay to <strong>4845637@gmail.com</strong><br/>
                    After payment, write to 4845637@gmail.com<br/>
                    Points will be added within an hour
                </div>

                     */
                }
            </Card>
            <Card className="mt-3 p-3 text-secondary">
                {
                    /*
                               <div className="mt-3 font-weight-bold">How to earn points?</div>
                                    <div className="mt-1">
                                        You can <a className={'text-primary'} onClick={()=> history.push(ADDACC_ROUTE)} style={{cursor:'pointer'}}>add 10 accounts</a> on different Travian servers and get 90 points ($3) for free!
                                    </div>
                    */
                }
                <div className="mt-3 font-weight-bold">How are points spent?</div>
                <div className="mt-1">
                    <ul>
                        <li>
                            Search for elephants or croppers cost {user.info.prices && user.info.prices.search ? user.info.prices.search : null} points.<br/>
                            {user.info.prices && user.info.prices.search ? user.info.prices.search : null} points are debited if you specified the coordinates of a point different from (200|200) or went to the pagination page.
                        </li>
                        <li>
                            Creating new bot cost {user.info.prices && user.info.prices.createBot ? user.info.prices.createBot : null} points.
                        </li>
                    </ul>
                </div>
                <div className="mt-3 font-weight-bold">Why haven't I received free points upon registration?</div>
                <div className="mt-1">
                    We have temporarily suspended the addition of demo points due to the fact that some users have abused this feature.<br/>
                    But we also reduced the price for buying points. Even the smallest package will last for a long time.
                </div>
                <div className="mt-3 font-weight-bold">Why should I add points?</div>
                <div className="mt-1">
                    At the start of each Travian server, we scan the crop cells.<br />
                    Every few days we are looking for elephants on every server in the game.<br />
                    This requires certain costs on our part.<br />
                    Therefore, we decided to take a symbolic payment for finding elephants and crop cells.<br />
                    By adding points, you can always find crop cells and elephants on each server.<br />
                    Enjoy the game :)
                </div>

            </Card>
            <Footer/>
        </Container>
    );
});

export default UserPage;
