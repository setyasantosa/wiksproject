import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return(
    <>
      <header>
        <nav>
          <div className="logo">SS</div>
          <ul>
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/about">About</Link></li>
            <li><Link className="nav-link" to="/contact">Contact</Link></li>
            <li><Link className="nav-link" to="/project">Project</Link></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Nav
