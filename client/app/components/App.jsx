import React from 'react';

import {IndexLink, Link} from 'react-router';

import {Home} from 'app/views/Home';

import ArticleList from 'app/components/ArticleList';
import NavLink from 'app/components/NavLink';
import NavBar from 'app/components/NavBar';


export class App extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (

      <div>
        <ul role="nav">
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/resume">Résumé</NavLink>
        </ul>
        {
          /*
          {this.props.children || <Home/>}
          */
        }
      </div>

    );
  }
}
