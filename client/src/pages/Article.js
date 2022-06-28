import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useNavigate, useParams} from "react-router-dom";
import {fetchArticle} from "../http/newsAPI";

import {Container} from "react-bootstrap";

const Articles = observer(() => {
    const {news} = useContext(Context)
    const {slug} = useParams()
    document.title = 'Article';
    const {category} = useParams()
    useEffect(() => {
        fetchArticle(slug).then(data => news.setArticle(data.article))
    }, [])

    return (
        <Container>
            <h2>{news.article.title}</h2>
            <div>Created {news.article.createdAt}, Likes {news.article.likes}</div>
            <div>{news.article.body}</div>
            <div>
                <img srs={news.article.image} width={"400"} height={"300"}/>
            </div>
            <div>img src: {news.article.image}</div>
        </Container>
    );
});

export default Articles;
