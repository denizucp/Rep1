import React from 'react';
import ReactRouter, {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Dashboard from '../components/Dashboard';
import Page1 from '../components/Page1';
import Navbar from '../components/Navbar';
import Research from '../components/Research';
import Poc from '../components/Poc';
const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Navbar}>
      <IndexRoute component={Dashboard}/>
      <Route path='/Dashboard' component={Dashboard} />
      <Route path='/Page1' component={Page1} />
      <Route path='/Research' component={Research} />
      <Route path='/Poc' component={Poc}/>

    </Route>
  </Router>
)

module.exports = routes;
