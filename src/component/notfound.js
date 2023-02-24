/* eslint-disable */
import React,{useState} from "react";
import {useNavigate} from 'react-router-dom'
function notfound(){
    const go=useNavigate();
    document.title="Not Found"
    return(
        <div className="home">
            <div>Page Not Found Eror 404 !</div>
            <button className="gotohome" onClick={()=>{go("/")}}>Go To Home</button>
        </div>
    )
}
export default notfound;