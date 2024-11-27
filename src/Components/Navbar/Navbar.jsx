import React, { useState } from 'react';

import './Navbar.css'
import {Link} from 'react-router-dom'

import logo from '../Assets/logo.png'
import cart from '../Assets/cart_icon.png'

const Navbar = () => {

    const [menu, setMenu] = useState("")

    

    return(
        <div className = "navbar">
           <div className = 'nav-logo'>
                <img src = {logo} alt="#" />
                <p>ABB CLOTHING</p>
           </div>
           <ul className="nav-menu" >
                <li  onClick={()=> {setMenu("shop")}}> <Link style = {{textDecoration:"None", color:"rgb(255,255,255)"}} to = '/' >Shop</Link>          {menu==="shop"?        <hr/> : <></> } </li>
                <li onClick={()=> {setMenu("mens")}}> <Link style = {{textDecoration:"None", color:"rgb(255,255,255)"}} to = '/men' >Men</Link>         {menu==="mens"?        <hr/> : <></> } </li>
                <li onClick={()=> {setMenu("womens")}}> <Link style = {{textDecoration:"None", color:"rgb(255,255,255)"}} to = '/women' >Women</Link>   {menu==="womens"?      <hr/> : <></> } </li>
                <li onClick={()=> {setMenu("kids")}}> <Link style = {{textDecoration:"None", color:"rgb(255,255,255)"}} to = '/kids' >Kids</Link>       {menu==="kids"?        <hr/> : <></> } </li>
           </ul>
           <div className="nav-login-cart">
                <Link style = {{textDecoration:"None"}} to = '/login'><button>Login</button></Link>
                <Link style = {{textDecoration:"None"}} to = '/cart>' ><img src = {cart} alt="#" /></Link>
                <div className='nav-cart-count'>0</div>
           </div>
        </div>
    )
}

export default Navbar;
