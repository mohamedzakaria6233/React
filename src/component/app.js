/* eslint-disable */
import React,{useState} from "react";
//   component  /
import Header from './header'
import Footer from './footer'
import Home from './home'
import Contact from './contact'
import NotFound from './notfound'
import About from './about'
import Product from "./product";
import Addproduct from "./addproduct";
import Removeproduct from "./removeproduct";
import Users from './users'
import Userdetail from './userdetail'
import Admin from './admin'
//////////////////////
import './style.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
/////////////////
function app(){
    return(
        <div className="container">
            <BrowserRouter>
            <Header/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="*" element={<NotFound/>}/>
                <Route path="/product" element={<Product/>}>
                    <Route index element={<Addproduct/>}/>
                    <Route path="add" element={<Addproduct/>}/>
                    <Route path="remove" element={<Removeproduct/>}/>
                </Route>
                <Route path="users" element={<Users/>}>
                    <Route path=":userId" element={<Userdetail/>}/>
                    <Route path="admin" element={<Admin/>}/>
                </Route>
            </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    )
}
export default app;




// <BrowserRouter>
// <Header/>
// <Routes>
//     <Route path="/"  element={<Home/>}/>
//     <Route path="/about"  element={<About/>}/>
//     <Route path="/contact"  element={<Contact/>}/>
//     <Route path="*"  element={<NotFound/>}/>
//     <Route path="/product"  element={<Product/>}>
//         <Route index element={<Addproduct/>}/>
//         <Route path="add"  element={<Addproduct/>}/>
//         <Route path="remove"  element={<Removeproduct/>}/>
//     </Route>
//     <Route path="/users" element={<Users/>}>
//         <Route path=":userId"   element={<Userdetail/>}/>
//         <Route path="admin" element={<Admin/>}/>
//     </Route>
// </Routes>
// </BrowserRouter>
// <Footer/>