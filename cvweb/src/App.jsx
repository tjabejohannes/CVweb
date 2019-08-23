import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Playground from './components/Playground.jsx';

import styled from 'styled-components';

const StyledApp = styled.div`
    margin-top: 70px;
`



class App extends Component {
  render() {
    return (
      <Router>
        <StyledApp>
          <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link">Home</Link></li>
              <li><Link to={'/about'} className="nav-link">About</Link></li>
              <li><Link to={'/projects'} className="nav-link">Projects</Link></li>
              <li><Link to={'/playground'} className="nav-link">Playground</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/projects' component={Projects} />
            <Route path='/about' component={About} />
            <Route path='/playground' component={Playground} />
          </Switch>
        </StyledApp>
      </Router>
    );
  }
}

export default App;