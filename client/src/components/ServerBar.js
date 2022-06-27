import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";
import {CROPPER_ROUTE, ELEPHANT_ROUTE, OASES_ROUTE} from "../utils/consts";
import {useHistory} from "react-router-dom";

const ServerBar = observer(() => {
    const {elephant,croppers,oases,user,servers} = useContext(Context)
    const history = useHistory()
    //console.log(elephant.servers)
    if(user.info.searchType === 'Elephants'){
        return (
            <Row className="flex mt-3">
                <div className="p-2 font-weight-bold">Servers: </div>
                {elephant.servers.map(server =>
                    <Card
                        key={server.id}
                        className="p-2"
                        style={{cursor: 'pointer',}}
                        //onClick={()=> elephant.setSelectedServer(server)}
                        onClick={() => history.push(ELEPHANT_ROUTE + '/' + server.server)}
                        border={server.server === elephant.selectedServer.server ? 'primary':'light'}
                    >
                        {server.server.replace('.travian.com','')}
                    </Card>
                )}
            </Row>
        );
    }
    else if(user.info.searchType === 'Oases'){
        return (
            <Row className="flex mt-3">
                <div className="p-2 font-weight-bold">Servers: </div>
                {oases.servers.map(server =>
                    <Card
                        key={server.id}
                        className="p-2"
                        style={{cursor: 'pointer',}}
                        //onClick={()=> oases.setSelectedServer(server)}
                        onClick={() => history.push(OASES_ROUTE + '/' + server.server)}
                        border={server.server === oases.selectedServer.server ? 'primary':'light'}
                    >
                        {server.server.replace('.travian.com','')}
                    </Card>
                )}
            </Row>
        );
    }
    else if(user.info.searchType === 'Servers'){
        return (
            <Row className="flex mt-3">
                <div className="p-2 font-weight-bold">Servers: </div>
                {servers.servers.map(server =>
                    <Card
                        key={server.id}
                        className="p-2"
                        style={{cursor: 'pointer',}}
                        onClick={()=> servers.setSelectedServer(server)}
                        //onClick={() => history.push(OASES_ROUTE + '/' + server.server)}
                        border={server.server === servers.selectedServer.server ? 'primary':'light'}
                    >
                        {server.server.replace('.travian.com','')}
                    </Card>
                )}
            </Row>
        );
    }
    else if(user.info.searchType === 'Accounts'){
        return (
            <Row className="flex mt-3">
                <div className="p-2 font-weight-bold">Servers: </div>
                {servers.servers.map(server =>
                    <Card
                        key={server.id}
                        className="p-2"
                        style={{cursor: 'pointer',}}
                        onClick={()=> servers.setSelectedServer(server)}
                        //onClick={() => history.push(OASES_ROUTE + '/' + server.server)}
                        border={server.server === servers.selectedServer.server ? 'primary':'light'}
                    >
                        {server.server.replace('.travian.com','')}
                    </Card>
                )}
            </Row>
        );
    }
    else{
        return (
            <Row className="flex mt-3">
                <div className="p-2 font-weight-bold">Servers: </div>
                {croppers.servers.map(server =>
                    <Card
                        key={server.id}
                        className="p-2"
                        style={{cursor: 'pointer',}}
                        //onClick={()=> croppers.setSelectedServer(server)}
                        onClick={() => history.push(CROPPER_ROUTE + '/' + server.server)}
                        border={server.server === croppers.selectedServer.server ? 'primary':'light'}
                    >
                        {server.server.replace('.travian.com','')}
                    </Card>
                )}
            </Row>
        );
    }
});

export default ServerBar;