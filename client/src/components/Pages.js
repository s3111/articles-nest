import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Pagination} from "react-bootstrap";

const Pages = observer(() => {
    const {elephant,user,croppers,oases,servers} = useContext(Context)
    if(user.info.searchType === 'Elephants'){
        const pageCount = Math.ceil(elephant.totalCount / elephant.limit)
        const pages = []
        console.log('elephant',elephant.totalCount,elephant.limit,pageCount)
        for (let i = 0; i < pageCount; i++) {
            pages.push(i + 1)
        }
        let disabled = false
        if(!user.isAuth || !user.info.isActivated || user.info.balance < 2) disabled = true

        return ( <div>
                {pageCount ?
                    <Pagination className="mt-3">
                        <Pagination.First
                            disabled = {elephant.page === 1 || disabled}
                            onClick={() => elephant.setPage(1)}
                        />
                        <Pagination.Prev
                            disabled = {elephant.page === 1 || disabled}
                            onClick={() => elephant.setPage(elephant.page-1)}
                        />
                        <Pagination.Item
                            active={true}
                            disabled = {disabled}
                        >
                            {elephant.page} of {pageCount}
                        </Pagination.Item>
                        <Pagination.Next
                            disabled = {elephant.page === pageCount || disabled}
                            onClick={() => elephant.setPage(elephant.page+1)}
                        />
                        <Pagination.Last
                            disabled = {elephant.page === pageCount || disabled}
                            onClick={() => elephant.setPage(pageCount)}
                        />
                    </Pagination>
                    :
                    <div></div>
                }
            </div>
        );
    }
    else if(user.info.searchType === 'Oases'){
        const pageCount = Math.ceil(oases.totalCount / oases.limit)
        const pages = []
        console.log('oases',oases.totalCount,oases.limit,pageCount)
        for (let i = 0; i < pageCount; i++) {
            pages.push(i + 1)
        }
        let disabled = false
        if(!user.isAuth || !user.info.isActivated || user.info.balance < 2) disabled = true

        return ( <div>
                {pageCount ?
                    <Pagination className="mt-3">
                        <Pagination.First
                            disabled = {oases.page === 1 || disabled}
                            onClick={() => oases.setPage(1)}
                        />
                        <Pagination.Prev
                            disabled = {oases.page === 1 || disabled}
                            onClick={() => oases.setPage(oases.page-1)}
                        />
                        <Pagination.Item
                            active={true}
                            disabled = {disabled}
                        >
                            {oases.page} of {pageCount}
                        </Pagination.Item>
                        <Pagination.Next
                            disabled = {oases.page === pageCount || disabled}
                            onClick={() => oases.setPage(oases.page+1)}
                        />
                        <Pagination.Last
                            disabled = {oases.page === pageCount || disabled}
                            onClick={() => oases.setPage(pageCount)}
                        />
                    </Pagination>
                    :
                    <div></div>
                }
            </div>
        );
    }
    else if(user.info.searchType === 'Servers'){
        const pageCount = Math.ceil(servers.totalCount / servers.limit)
        const pages = []
        //console.log('oases',oases.totalCount,oases.limit,pageCount)
        for (let i = 0; i < pageCount; i++) {
            pages.push(i + 1)
        }
        let disabled = false
        //if(!user.isAuth || !user.info.isActivated || user.info.balance < 2) disabled = true

        return ( <div>
                {pageCount ?
                    <Pagination className="mt-3">
                        <Pagination.First
                            disabled = {servers.page === 1 || disabled}
                            onClick={() => servers.setPage(1)}
                        />
                        <Pagination.Prev
                            disabled = {servers.page === 1 || disabled}
                            onClick={() => servers.setPage(servers.page-1)}
                        />
                        <Pagination.Item
                            active={true}
                            disabled = {disabled}
                        >
                            {servers.page} of {pageCount}
                        </Pagination.Item>
                        <Pagination.Next
                            disabled = {servers.page === pageCount || disabled}
                            onClick={() => servers.setPage(servers.page+1)}
                        />
                        <Pagination.Last
                            disabled = {servers.page === pageCount || disabled}
                            onClick={() => servers.setPage(pageCount)}
                        />
                    </Pagination>
                    :
                    <div></div>
                }
            </div>
        );
    }
    else{
        const pageCount = Math.ceil(croppers.totalCount / croppers.limit)
        const pages = []
        console.log('croppers',croppers.totalCount,croppers.limit,pageCount)
        for (let i = 0; i < pageCount; i++) {
            pages.push(i + 1)
        }
        let disabled = false
        if(!user.isAuth || !user.info.isActivated || user.info.balance < 2) disabled = true

        return ( <div>
                {pageCount ?
                    <Pagination className="mt-3">
                        <Pagination.First
                            disabled = {croppers.page === 1 || disabled}
                            onClick={() => croppers.setPage(1)}
                        />
                        <Pagination.Prev
                            disabled = {croppers.page === 1 || disabled}
                            onClick={() => croppers.setPage(croppers.page-1)}
                        />
                        <Pagination.Item
                            active={true}
                            disabled = {disabled}
                        >
                            {croppers.page} of {pageCount}
                        </Pagination.Item>
                        <Pagination.Next
                            disabled = {croppers.page === pageCount || disabled}
                            onClick={() => croppers.setPage(croppers.page+1)}
                        />
                        <Pagination.Last
                            disabled = {croppers.page === pageCount || disabled}
                            onClick={() => croppers.setPage(pageCount)}
                        />
                    </Pagination>
                    :
                    <div></div>
                }
            </div>
        );
    }
});

/*
                    {
                pages.map(page =>
                <Pagination.Item
                    key={page}
                    active={elephant.page === page}
                    onClick={() => elephant.setPage(page)}
                    disabled = {!user.isAuth}
                >
                    {page}
                </Pagination.Item>
            )}

 */

export default Pages;