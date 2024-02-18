import React, { useState } from 'react';
import './Navbar.css'
import logo from '../Assest/logo.png'
import cart_icon from '../Assest/cart_icon.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu , setMenu] =useState("shop")
    return (
    <div className='navbar'>
       <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
       </div>
       <ul className="nav-menu">
           <li onClick={()=>{setMenu("shop")}}> <Link style={{textDecoration:'none', color:' #626262'}} to='/'> Shop </Link> {menu==="shop"?<hr/>:<></>}</li>
           <li onClick={()=>{setMenu("Men")}}> <Link style={{textDecoration:'none', color:' #626262'}} to='/mens'> Men </Link>{menu==="Men"?<hr/>:<></>}</li>
           <li onClick={()=>{setMenu("women")}}> <Link style={{textDecoration:'none',color:' #626262'}} to='/womens'> Women </Link>{menu==="women"?<hr/>:<></>}</li>
           <li onClick={()=>{setMenu("kids")}}> <Link style={{textDecoration:'none',color:' #626262'}} to='/kids'> Kids </Link> {menu==="kids"?<hr/>:<></>}</li>
       </ul>
       <div className="nav-login-cart">
    <Link to='/login'>   <button> login</button> </Link>
    <Link to='/carts'>   <img src={cart_icon} alt="" /> </Link>
       <div className="nav-cart-count">0</div>
       </div>
    </div>
    );
}



export default Navbar;