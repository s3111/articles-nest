import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Container, Row} from "react-bootstrap";


const ArticlesList = observer(() => {
    const {news} = useContext(Context)

    return (
        <Container className="flex mt-3">
            {news && news.articles ? news.articles.map(art =>
                    <Card
                        key={art.id}
                        className="p-2"
                    >
                        <a href={art.slug}>
                            <img src={art.image} width={"400"} height={"300"}/>
                        </a>
                        <a href={art.slug}>
                            <div>{art.title}</div>
                        </a>
                        <div>{art.description}</div>
                    </Card>
                )
                : <div>No articles</div>
            }
        </Container>
    );
});

export default ArticlesList;