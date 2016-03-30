//import { Router, Route, Link } from 'react-router'

render(((
  <Router history={browserHistory}>
    <Route path="/home" component={App}>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.body)
