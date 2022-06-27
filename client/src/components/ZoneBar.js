import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const ZoneBar = observer(() => {
    const {elephant,croppers,oases,servers,user} = useContext(Context)
    if(user.info.searchType === 'Elephants'){
        return (
            <Row className="flex mt-3">
                <div className="p-2 font-weight-bold">Zones: </div>
                <Card
                    key={'All'}
                    className="p-2"
                    style={{cursor: 'pointer',}}
                    onClick={()=> elephant.setSelectedZone({})}
                    border={!elephant.selectedZone.zone ? 'primary':'light'}
                >
                    All
                </Card>
                {elephant.zones.map(zone =>
                    <Card
                        key={zone.zone}
                        className="p-2"
                        style={{cursor: 'pointer',}}
                        onClick={()=> elephant.setSelectedZone(zone)}
                        border={zone.zone === elephant.selectedZone.zone ? 'primary':'light'}
                    >
                        {zone.zone}
                    </Card>
                )}
            </Row>
        );
    }
    else if (user.info.searchType === 'Oases'){
        return (
            <Row className="flex mt-3">
                <div className="p-2 font-weight-bold">Zones: </div>
                <Card
                    key={'All'}
                    className="p-2"
                    style={{cursor: 'pointer',}}
                    onClick={()=> oases.setSelectedZone({})}
                    border={!oases.selectedZone.zone ? 'primary':'light'}
                >
                    All
                </Card>
                {oases.zones.map(zone =>
                    <Card
                        key={zone.zone}
                        className="p-2"
                        style={{cursor: 'pointer',}}
                        onClick={()=> oases.setSelectedZone(zone)}
                        border={zone.zone === oases.selectedZone.zone ? 'primary':'light'}
                    >
                        {zone.zone}
                    </Card>
                )}
            </Row>
        );
    }
    else if (user.info.searchType === 'Servers'){
        return (
            <Row className="flex mt-3">
                <div className="p-2 font-weight-bold">Zones:</div>
                <Card
                    key={'All'}
                    className="p-2 "
                    style={{cursor: 'pointer',}}
                    onClick={()=> servers.setSelectedZone({})}
                    border={!servers.selectedZone.zone ? 'primary':'light'}
                >
                    All
                </Card>
                {servers.zones.map(zone =>
                    <Card
                        key={zone.zone}
                        className="d-inline p-2 "
                        style={{cursor: 'pointer',}}
                        onClick={()=> servers.setSelectedZone(zone)}
                        border={zone.zone === servers.selectedZone.zone ? 'primary':'light'}
                    >
                        {zone.zone}
                    </Card>
                )}
            </Row>
        );
    }
    else if (user.info.searchType === 'Accounts'){
        return (
            <Row className="flex mt-3">
                <div className="p-2 font-weight-bold">Zones:</div>
                <Card
                    key={'All'}
                    className="p-2 "
                    style={{cursor: 'pointer',}}
                    onClick={()=> servers.setSelectedZone({})}
                    border={!servers.selectedZone.zone ? 'primary':'light'}
                >
                    All
                </Card>
                {servers.zones.map(zone =>
                    <Card
                        key={zone.zone}
                        className="d-inline p-2 "
                        style={{cursor: 'pointer',}}
                        onClick={()=> servers.setSelectedZone(zone)}
                        border={zone.zone === servers.selectedZone.zone ? 'primary':'light'}
                    >
                        {zone.zone}
                    </Card>
                )}
            </Row>
        );
    }
    else{
        return (
            <Row className="flex mt-3">
                <div className="p-2 font-weight-bold">Zones: </div>
                <Card
                    key={'All'}
                    className="p-2"
                    style={{cursor: 'pointer',}}
                    onClick={()=> croppers.setSelectedZone({})}
                    border={!croppers.selectedZone.zone ? 'primary':'light'}
                >
                    All
                </Card>
                {croppers.zones.map(zone =>
                    <Card
                        key={zone.zone}
                        className="p-2"
                        style={{cursor: 'pointer',}}
                        onClick={()=> croppers.setSelectedZone(zone)}
                        border={zone.zone === croppers.selectedZone.zone ? 'primary':'light'}
                    >
                        {zone.zone}
                    </Card>
                )}
            </Row>
        );
    }
});

export default ZoneBar;