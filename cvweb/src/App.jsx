import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';

import styled from 'styled-components';

const StyledApp = styled.div`
    margin-top: 70px;
`


class App extends Component {
  render() {
    return (
      <Router>
        <StyledApp>
          <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link">Home</Link></li>
              <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
              <li><Link to={'/about'} className="nav-link">About</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/contact' component={Contact} />
            <Route path='/about' component={About} />
          </Switch>
        </StyledApp>
      </Router>
    );
  }
}

export default App;