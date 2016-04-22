import React from 'react';
import { render } from 'react-dom';
import { hashHistory, Router, Route, IndexRoute} from 'react-router';

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

      <IndexRoute component={Home}/>

      <Route path="/blog" component={Blog}>
        <IndexRoute component={ArticleList}/>
        <Route path="/blog/:blogtitle" component={Blog}/>
      </Route>

      <Route path="/resume" component={Resume}/>

    </Route>
  </Router>
), document.getElementById("app"))
