/* eslint-disable */
import React,{useState} from "react";
import {Link ,Outlet} from 'react-router-dom';

function product(){
    document.title="product"
    return(
        <div className="home">
            this is component product
            <nav className="nav">
                <Link to="add">Add Product</Link>
                <Link to="remove">Remove Product</Link>
            </nav>
            <Outlet/>
        </div>
    )
}
export default product;



{/* <nav className="nav">
<Link to="add">Add product</Link>
<Link to="remove">Remove</Link>
</nav>
<Outlet/> */}