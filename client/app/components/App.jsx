import React from 'react';

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
        <NavBar>{ this.props.children }</NavBar>
      </div>

    );
  }
}
