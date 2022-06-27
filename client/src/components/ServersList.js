import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Col, Container, Row, Table} from "react-bootstrap";
import '../assets/style.css';
import {updateBot} from "../http/botAPI";
import {CROPPER_ROUTE, ELEPHANT_ROUTE, OASES_ROUTE} from "../utils/consts";
import {useHistory} from "react-router-dom";

const ServersList = observer(() => {
    const {servers,user} = useContext(Context)
    const history = useHistory()
    const timeAgoElephant = (time)=>{
        let timeAgo = ''
        if(time){
            let s = new Date(time)
            if(Date.now() - s > 1000*60*60*48){ // 48 hours
                timeAgo = Math.floor((Date.now() - s)/(1000*60*60*24)) + ' days ago'
            }

            else if(Date.now() - s > 1000*60*60*24){ // 26 hours
                timeAgo = 'yesterday'
            }

            else if(Date.now() - s > 1000*60*60*2){ // > 2 hours
                timeAgo = Math.floor((Date.now() - s)/(1000*60*60)) + ' hrs ago'
            }
            else timeAgo = 'just now'
        }
        return timeAgo
    }
    const timeAgoServer = (time)=>{
        let timeAgo = ''
        if(time){
            let s = time * 1000
            if(Date.now() - s > 1000*60*60*48){ // 24 hours
                return(<span>{Math.floor((Date.now() - s)/(1000*60*60*24))}  <span style={{fontSize: '0.80rem'}}> days ago</span></span>)
            }
            else if(Date.now() - s > 1000*60*60*24){ // 24 hours
                timeAgo = 'yesterday'
            }
            else if(Date.now() - s > 1000*60*60*2){ // > 2 hours
                timeAgo = 'today'
            }
            else if(Date.now() - s > 0){
                timeAgo = 'just now'
            }
            else {
                //timeAgo = new Date(s).toLocaleString()
                return(<span><i className={"icon-clock"}></i> {new Intl.DateTimeFormat('en-US',{month: 'short', day: 'numeric',}).format(s)}</span>)
            }
        }
        return timeAgo
    }

    if(servers.servers.length){
        return (
                    <Table  size="sm" style={{maxWidth: '750px'}} className={"mt-2"}>
                    <thead>
                    <tr className="mt-3 font-weight-bold">
                        <td>Server</td>
                        <td>Start</td>
                        <td md="2" style={{wordWrap: 'break-word', wordBreak: 'break-word'}}>Oases</td>
                        <td md="2" style={{wordWrap: 'break-word', wordBreak: 'break-word'}}>Croppers</td>
                        <td>Elephants</td>
                    </tr>
                    </thead>
                    <tbody >
                    {servers.servers.map((item,i) =>
                        <tr key={i}>
                            <td style={{wordWrap: 'break-word', wordBreak: 'break-word'}}>
                                <a target="_blank" rel="noreferrer"  href={`https://${item.server}`}>
                                    {item.server.replace('.travian.com','')}
                                </a>
                                {item.closed ? <i className={'icon-lock ml-1'}></i> : null}
                                {item.ended ? <i className={'icon-close ml-1'}></i> : null}

                            </td>
                            <td className="merged">
                                <span className={"text-secondary"}>{timeAgoServer(item.start)}</span>
                            </td>
                            <td  md="2" className="merged">
                                {item.scanStatus ?
                                    <a
                                        className={'text-primary'}
                                        onClick={()=> history.push(OASES_ROUTE+'/'+item.server)}
                                        style={{cursor:'pointer'}}
                                    >
                                        <i className={"r2"}></i>
                                    </a>
                                    : null
                                }

                            </td>
                            <td  md="2" className="merged">
                                {item.scanStatus ?
                                    <a
                                        className={'text-primary'}
                                        onClick={() => history.push(CROPPER_ROUTE + '/' + item.server)}
                                        style={{cursor: 'pointer'}}
                                    >
                                        <i className={"r11"}></i>
                                    </a>
                                    : null
                                }
                            </td>

                            <td className="merged">
                                {item.scanStatus && item.elephantsCount ?
                                    <a
                                        className={'text-primary'}
                                        onClick={() => history.push(ELEPHANT_ROUTE + '/' + item.server)}
                                        style={{cursor: 'pointer'}}
                                    >
                                        <span className={"text-secondary"}>{item.elephantsCount} <i className={"unit u40"}></i> <span style={{fontSize: '0.85rem'}}>found {timeAgoElephant(item.lastScan)}</span></span>
                                    </a>
                                    : null
                                }
                            </td>
                        </tr>
                    )}
                    </tbody>

                </Table>
        );
    }
    else{
        return (
            <Row className="d-flex mt-3 mb-5">{/*
                    Please select Server
                */
            }
            </Row>
        );
    }
});

export default ServersList;