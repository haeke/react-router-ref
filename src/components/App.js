import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './Navigation';
import * as routes from '../constants/routes';

import Landing from './Landing';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import ErrorMessage from './ErrorMessage';

const App = () => 
  <Router>
    <div>
        <Navigation />
        <Switch>
          <Route exact path={routes.LANDING} component={() => <Landing />} />
          <Route exact path={routes.HOME} component={() => <Home />} />
          <Route exact path={routes.ABOUT} component={() => <About />} />
          <Route exact path={routes.CONTACT} component={() => <Contact />} />
          <Route component={ErrorMessage} />
        </Switch>
    </div>
  </Router>

export default App;
