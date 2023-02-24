/* eslint-disable */
import React,{useState} from "react";
import {Outlet} from 'react-router-dom'
import {useSearchParams} from 'react-router-dom'
function users(){
    document.title="Contact";
    const [search,setSearch]=useSearchParams();
    const isActive=search.get("isActive")
    return(
        <div className="home">
            <div>this is users component</div>
            <button onClick={()=>setSearch({isActive:"true"})}>Active</button>
            <button onClick={()=>setSearch({isActive:"false"})}>Not Active</button>
            <Outlet/>
            {isActive=="true"&& <h1>This is Active Users</h1>}
            {isActive=="false" && <h1>This is Not Active Users</h1>}
        </div>
    )
}
export default users;