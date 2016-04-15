import React from 'react';
import ReactDOM from 'react-dom';

import { Navbar }     from 'app/components/Navbar/Navbar';
import { ArticleList }from 'app/components/ArticleList';
import { Footer }     from 'app/components/Footer/Footer.jsx';

ReactDOM.render(
  <div id="wrapper">
    <Navbar/>
    <ArticleList/>
  </div>,
  document.getElementById('test') || document.body
);

//ReactDOM.render(<Footer/>, document.getElementById('app') || document.body);
