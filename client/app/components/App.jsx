/* eslint react/prop-types: 0 */

import React from 'react';

import {IndexLink} from 'react-router';
import NavLink from 'app/components/NavLink';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
            <ul role="nav">
                <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/resume">Résumé</NavLink>
            </ul>
            {this.props.children}
        </div>
    );
  }
}
