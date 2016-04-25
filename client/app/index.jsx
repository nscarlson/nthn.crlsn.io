import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute} from 'react-router';

import { ArticleList }  from 'app/components/ArticleList';

import App              from 'app/components/App';
import About            from 'app/views/About';
import Home             from 'app/views/Home';
import Blog             from 'app/views/Blog';
import Projects         from 'app/views/Projects';
import Resume           from 'app/views/Resume';

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>

            <Route path="/blog" component={ArticleList}/>
            <Route path="/blog/:blogtitle" component={Blog}/>

            <Route path="/projects" component={Projects}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/about" component={About}/>
        </Route>
    </Router>), document.getElementById("app")
)
