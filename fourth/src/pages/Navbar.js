import {Link} from 'raect-router-dom';
import React from 'react'

function Navbar() {
  return (
    <>
   <ul>
        <li><Link to="/contact">Contact</Link></li>          
        <li><Link to="/about">About</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
    </ul>
    </>
 )
}

export default Navbar

// is me a tag nahi link ka tag lagta hee 