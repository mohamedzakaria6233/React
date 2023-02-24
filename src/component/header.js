/* eslint-disable */
import React,{useState} from "react";
import {NavLink} from 'react-router-dom'
function header(){
    return(
        <div className="header">
            <nav className="nav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="contact">Contact</NavLink>
                <NavLink to="blog">Blog</NavLink>
                <NavLink to="product">Product</NavLink>
            </nav>
        </div>
    )
}
export default header;