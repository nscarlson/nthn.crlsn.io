import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  displayName = 'Header'

  render = () =>
    <header role="banner">
      <div className="nav-wrapper">
        <nav role="navigation">
          <ul className="centered-navigation-menu show" id="nav-menu">
            <li className="nav-link"><Link to="/">NTHN</Link></li>
            <li className="nav-link"><Link to="/resume">Résumé</Link></li>
            <li className="nav-link"><Link to="/contact">Contact</Link></li>
            <li className="nav-link"><Link to="/blog">Blog</Link></li>
          </ul>
        </nav>
      </div>
    </header>
}

export default Header
