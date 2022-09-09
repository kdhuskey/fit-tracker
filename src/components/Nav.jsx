import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"

function Nav() {
  return (
    <nav className='navbar'>
        <div className='logo'>
            Cheesin spot
        </div>
        <div className='nav-link'>
            <Link className='link' to="/">
                Logo
            </Link>
            <Link className='link' to="/dashboard">
                Dashboard
            </Link>
            <Link className='link' to="/logout">
                Logout
            </Link>
        </div>
    </nav>
  )
}

export default Nav