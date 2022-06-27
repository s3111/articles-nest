import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Pagination} from "react-bootstrap";

const Pages = observer(() => {
    const {news} = useContext(Context)

    const pageCount = Math.ceil(news.totalCount / news.limit)
    const pages = []
    console.log('news', news.totalCount, news.limit, pageCount)
    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (<div>
            {pageCount ?
                <Pagination className="mt-3">
                    <Pagination.First
                        disabled={news.page === 1}
                        onClick={() => news.setPage(1)}
                    />
                    <Pagination.Prev
                        disabled={news.page === 1 }
                        onClick={() => news.setPage(news.page - 1)}
                    />
                    <Pagination.Item
                        active={true}
                        disabled={disabled}
                    >
                        {news.page} of {pageCount}
                    </Pagination.Item>
                    <Pagination.Next
                        disabled={news.page === pageCount}
                        onClick={() => news.setPage(news.page + 1)}
                    />
                    <Pagination.Last
                        disabled={news.page === pageCount}
                        onClick={() => news.setPage(pageCount)}
                    />
                </Pagination>
                :
                <div></div>
            }
        </div>
    );
});

export default Pages;