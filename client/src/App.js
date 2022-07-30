import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './components/Footer';
import MainNavigation from './components/Navigation/MainNavigation';

function App() {
  return (
    <Router basename="/beamchristian.github.io">
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <About />
          </Route>
          <Route path="/portfolio" exact>
            <Portfolio />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/resume" exact>
            <Resume />
          </Route>
        </Switch>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
