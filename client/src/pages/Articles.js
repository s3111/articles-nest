import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useNavigate, useParams} from "react-router-dom";
import {fetchArticles, fetchCategories} from "../http/newsAPI";
import CategoriesBar from "../components/CategoriesBar";
import {Container} from "react-bootstrap";
import ArticlesList from "../components/ArticlesList";
import Pages from "../components/Pages";

const Articles = observer(() => {
    const {news} = useContext(Context)
    //const navigate = useNavigate()
    document.title = 'Articles';
    const {category} = useParams()
    useEffect(() => {
        fetchCategories().then(data => news.setCategories(data.categories))
    },[])
    useEffect(() => {
        fetchArticles(news.category.id).then(data => {
            news.setArticles(data.articles)
            news.setArticlesCount(data.articlesCount)
        })
    },[news.category])

    return (
        <Container>
            <h1>Articles</h1>

            <CategoriesBar/>
            <Pages/>
            <ArticlesList/>
            <Pages/>
        </Container>
    );
});

export default Articles;