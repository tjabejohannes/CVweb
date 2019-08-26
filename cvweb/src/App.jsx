import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
/* import Playground from './components/Playground.jsx'; */

import styled from 'styled-components';

const StyledApp = styled.div`
    margin-top: 70px;
`



class App extends Component {
  homePath = process.env.PUBLIC_URL;
  render() {
    return (
      <Router>
        <StyledApp>
          <nav className="navbar navbar-expand fixed-top navbar-light bg-light">

            <ul className="navbar-nav">
              <li className="nav-item"><Link to={this.homePath + '/'} className="nav-link">About Me</Link></li>
              <li className="nav-item"><Link to={this.homePath  + '/projects'} className="nav-link">Projects</Link></li>
              {/*<li><Link to={'/playground'} className="nav-link">Playground</Link></li>*/}
            </ul>
          </nav>
          <Switch>
            <Route exact path={this.homePath  + '/'} component={About} />
            <Route path={this.homePath + '/projects'} component={Projects} />
            {/*<Route path='/playground' component={Playground} />*/}
          </Switch>
        </StyledApp>
      </Router>
    );
  }
}

export default App;