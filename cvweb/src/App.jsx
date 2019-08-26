import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import About from './components/About.jsx';
import Projects from './components/Projects.jsx';

import styled from 'styled-components';

const StyledApp = styled.div`
    margin-top: 70px;
`

const homePath = process.env.PUBLIC_URL;


class App extends Component {
  render() {
    return (
      <Router>
        <StyledApp>
          <nav className="navbar navbar-expand fixed-top navbar-light bg-light">
            <ul className="navbar-nav">
              <li className="nav-item"><Link to={homePath + '/'} className="nav-link">About Me</Link></li>
              <li className="nav-item"><Link to={homePath + '/projects'} className="nav-link">Projects</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route exact path={homePath + '/'} component={About} />
            <Route path={homePath + '/projects'} component={Projects} />
          </Switch>
        </StyledApp>
      </Router>
    );
  }
}

export default App;