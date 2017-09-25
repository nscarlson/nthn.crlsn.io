import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header role="banner">
    <nav role="navigation">
      <ul>
        <li className="nav-link"><Link to="/">NTHN</Link></li>
        <li className="nav-link"><Link to="/projects">Projects</Link></li>
        <li className="nav-link"><Link to="/about">About</Link></li>
        <li className="nav-link"><Link to="/blog">Blog</Link></li>
      </ul>
    </nav>
  </header>
)

Header.displayName = 'Header'

export default Header
