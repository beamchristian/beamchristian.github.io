import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import About from './pages/About';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <About />
        </Route>
        <Route path="/portfolio" exact>
          <Portfolio />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
