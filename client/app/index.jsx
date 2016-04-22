import React from 'react';
import { render } from 'react-dom';
import { hashHistory, Router, Route } from 'react-router';

import { ArticleList }from 'app/components/ArticleList';

import { App }        from 'app/components/App';
import { About }      from 'app/components/About';

import { Home }       from 'app/views/Home';
import { Blog }       from 'app/views/Blog';
import { Projects }   from 'app/views/Resume';
import { Resume }     from 'app/views/Resume';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/test" component={ArticleList} />
    </Route>
  </Router>), document.body
)
//ReactDOM.render(<Footer/>, document.getElementById('app') || document.body);
