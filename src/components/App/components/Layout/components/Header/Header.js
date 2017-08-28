import React, { Component } from 'react'

class Header extends Component {
  displayName = 'Header'

  render = () =>
    <header className="centered-navigation" role="banner">
      <div className="centered-navigation-wrapper">
        <a className="centered-navigation-mobile-menu" href="" id="js-centered-navigation-mobile-menu" >MENU</a>

        <nav role="navigation">
          <ul className="centered-navigation-menu show" id="js-centered-navigation-menu">
            <li className="nav-link"><a href="">NTHN</a></li>
            <li className="nav-link"><a href="">Résumé</a></li>
            <li className="nav-link"><a href="">Contact</a></li>
            <li className="nav-link"><a href="">Blog</a></li>
          </ul>
        </nav>
      </div>
    </header>
}

export default Header
