import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const CategoriesBar = observer(() => {
    const {news} = useContext(Context)

    return (
        <Row className="flex mt-3">
            <div className="p-2 font-weight-bold">Categories:</div>
            <Card
                key={'All'}
                className="p-2"
                style={{cursor: 'pointer',}}
                onClick={() => news.setCategory({})}
                border={!news.category.id ? 'primary' : 'light'}
            >
                All
            </Card>
            {news && news.categories ? news.categories.map(cat =>
                <Card
                    key={cat.id}
                    className="p-2"
                    style={{cursor: 'pointer',}}
                    onClick={() => news.setCategory(cat)}
                    border={cat.id === news.category.id ? 'primary' : 'light'}
                >
                    {cat.name}
                </Card>
            )
                : <div>No categories</div>
                }
        </Row>
    );
});

export default CategoriesBar;