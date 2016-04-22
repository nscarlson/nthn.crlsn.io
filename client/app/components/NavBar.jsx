// TODO: fix <NavLink>; breaks everything
//  <NavLink to="/about">About</NavLink>

import React from 'react';

export default class NavBar extends React.Component {

  render() {
    return (
      <header className="centered-navigation" role="banner">
        <div className="centered-navigation-wrapper">
          <a href=""
            id="js-centered-navigation-mobile-menu"
            className="centered-navigation-mobile-menu">MENU
          </a>

          <nav role="navigation">

            <ul id="js-centered-navigation-menu"
              className="centered-navigation-menu show">

              <li className="nav-link"><a href="">NTHN</a></li>
              <li className="nav-link"><a href="">Résumé</a></li>
              {/* <li className="nav-link logo"><a href="" className="logo"><img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_logo_3_dark.png" alt="Logo image"/></a></li> */ }
              <li className="nav-link"><a href="">Blog</a></li>
              <li className="nav-link"><a href="">Contact</a></li>
              <li className="nav-link"><a href="">Sign up</a></li>
            </ul>

          </nav>
        </div>
      </header>
    );
  }
}
