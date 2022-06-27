import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Col, Form, FormControl, Row} from "react-bootstrap";

const BotAuction = observer(() => {
    const {bot} = useContext(Context)
    //let race
    let events = {}
    //if(bot.bot.conf) race = bot.bot.conf.Account.race
    //if(bot.bot.stat) stat = bot.bot.stat
    //if(!bot.bot.stat){}

    if(bot.bot.events) {
        events = bot.bot.events
    }
    else return <div>Wrong bot events</div>
    /*
    if(!bot.bot.conf.Auction.Items){

        bot.bot.conf.Auction.Items = [
            {filter:1,  needBuy:0, needSell:0, maxBid:2, counted:0, diffItems: 1, filterName: 'helmet',itemName: 'Helmet'},
            {filter:2,  needBuy:0, needSell:0, maxBid:2, counted:0, diffItems: 1, filterName: 'body',itemName: 'Body'},
            {filter:3,  needBuy:0, needSell:0, maxBid:2, counted:0, diffItems: 1, filterName: 'leftHand',itemName: 'Left hand'},
            {filter:4,  needBuy:0, needSell:0, maxBid:2, counted:0, diffItems: 1, filterName: 'rightHand',itemName: 'Right hand'},
            {filter:5,  needBuy:0, needSell:0, maxBid:2, counted:0, diffItems: 1, filterName: 'shoes',itemName: 'Shoes'},
            {filter:6,  needBuy:0, needSell:0, maxBid:2, counted:0, diffItems: 1, filterName: 'horse',itemName: 'Horse'},
            {filter:7,  needBuy:0, needSell:0, maxBid:2, counted:1, diffItems: 0, filterName: 'bandage25',itemName: 'Small bandage'},
            {filter:8,  needBuy:0, needSell:0, maxBid:2, counted:1, diffItems: 0, filterName: 'bandage33',itemName: 'Bandage'},
            {filter:9,  needBuy:0, needSell:0, maxBid:2, counted:1, diffItems: 0, filterName: 'cage',itemName: 'Cage'},
            {filter:10, needBuy:0, needSell:0, maxBid:2, counted:1, diffItems: 0, filterName: 'scroll',itemName: 'Scroll'},
            {filter:11, needBuy:0, needSell:0, maxBid:2, counted:1, diffItems: 0, filterName: 'ointment',itemName: 'Ointment'},
            {filter:12, needBuy:0, needSell:0, maxBid:2, counted:0, diffItems: 0, filterName: 'bucketOfWater',itemName: 'Bucket of water'},
            {filter:13, needBuy:0, needSell:0, maxBid:2, counted:0, diffItems: 0, filterName: 'bookOfWisdom',itemName: 'Book of wisdom'},
            {filter:14, needBuy:0, needSell:0, maxBid:2, counted:1, diffItems: 0, filterName: 'lawTables',itemName: 'Law tables'},
            {filter:15, needBuy:0, needSell:0, maxBid:2, counted:0, diffItems: 0, filterName: 'artWork',itemName: 'Art work'},
        ]
    }
    */
    return (
        <div>
            <Form.Check
                type="checkbox"
                id={'auctionNeedSell'}
                name={'auctionNeedSell'}
                label="Sell items on auction"
                checked={bot.bot.conf.Auction.Sell.Active ? 1 : 0}
                value="1"
                onChange={e => {
                    e.target.checked ? bot.bot.conf.Auction.Sell.Active = 1 : bot.bot.conf.Auction.Sell.Active = 0
                    bot.setBot(bot.bot)
                }}
            />
            <Form.Check
                type="checkbox"
                id={'auctionNeedBuy'}
                name={'auctionNeedBuy'}
                label="Buy items on auction"
                checked={bot.bot.conf.Auction.Buy.Active ? 1 : 0}
                value="1"
                onChange={e => {
                    e.target.checked ? bot.bot.conf.Auction.Buy.Active = 1 : bot.bot.conf.Auction.Buy.Active = 0
                    bot.setBot(bot.bot)
                }}
            />
            {bot.bot.conf.Auction.Items ?
                <Row className="font-weight-bold mt-3">
                    <Col>Name</Col>
                    <Col>Buy</Col>
                    <Col>Max bid per item</Col>
                    <Col>Sell</Col>
                    {
                        /*
                    <Col>Sell only if amount more</Col>
                         */
                    }


                </Row>
                : null}

            {bot.bot.conf.Auction.Items ? bot.bot.conf.Auction.Items.map((item,k) =>
                <Row key={item.filter}>
                    <Col>{item.itemName}</Col>
                    <Col><Form.Check
                        type="checkbox"
                        id={'auctionNeedBuy-'+item.filter}
                        name={'auctionNeedBuy-'+item.filter}
                        checked={bot.bot.conf.Auction.Items[k].needBuy ? 1 : 0}
                        disabled = {item.diffItems || !bot.bot.conf.Auction.Buy.Active}
                        value="1"
                        onChange={e => {
                            e.target.checked ? bot.bot.conf.Auction.Items[k].needBuy = 1 : bot.bot.conf.Auction.Items[k].needBuy = 0
                            bot.setBot(bot.bot)
                        }}
                    /></Col>
                    <Col>
                        <FormControl
                            //aria-describedby="basic-addon1"
                            value={item.maxBid}
                            disabled = {item.diffItems || !bot.bot.conf.Auction.Buy.Active}
                            onChange={e => {
                                bot.bot.conf.Auction.Items[k].maxBid = parseInt(e.target.value)
                                bot.setBot(bot.bot)
                            }}
                            type={"number"}/>
                    </Col>
                    <Col><Form.Check
                        type="checkbox"
                        id={'auctionNeedSell-'+item.filter}
                        name={'auctionNeedSell-'+item.filter}
                        checked={bot.bot.conf.Auction.Items[k].needSell ? 1 : 0}
                        disabled = {!bot.bot.conf.Auction.Sell.Active}
                        value="1"
                        onChange={e => {
                            e.target.checked ? bot.bot.conf.Auction.Items[k].needSell = 1 : bot.bot.conf.Auction.Items[k].needSell = 0
                            bot.setBot(bot.bot)
                        }}
                    /></Col>
                </Row>

            ) : null}

        </div>
    );
});

export default BotAuction;