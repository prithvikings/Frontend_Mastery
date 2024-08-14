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
        <li>
                <select id="themeSwitcher">
                    <option value="">Select a theme</option>
                    <option value="theme-light">Light</option>
                    <option value="theme-dark">Dark</option>
                    <option value="theme-ocean">Ocean</option>
                    <option value="theme-sepia">Sepia</option>
                </select>
            </li>
            <button>Login</button>
        </div>
    </div>
  )
}

export default Nav