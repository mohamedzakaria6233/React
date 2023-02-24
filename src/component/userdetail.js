/* eslint-disable */
import React,{useState} from "react";
import {useParams} from 'react-router-dom'
function userdetail(){
    document.title="Contact";
    const params=useParams();
    const id=useParams().userId
    return(
        <div>
            <div>User Number {id}</div>
        </div>
    )
}
export default userdetail;