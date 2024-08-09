import React from 'react'
import "./nav.css"
function Nav() {
  return (
    <div className='nav'>
        <div className='logo'>
            <img src="/images/brand_logo.png" alt="" />
        </div>
        <div className='nav-links'>
            <a href='#'>Menu</a>
            <a href='#'>Location</a>
            <a href='#'>About</a>
            <a href="#">Contact</a>
        </div>
        <div className='btn'>
            <button>Login</button>
        </div>
    </div>
  )
}

export default Nav