import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, ContactUs } from './pages';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/contact-us">
          <ContactUs />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
