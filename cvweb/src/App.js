import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from "./components/Projects";
import Playground from './components/Playground';
import './App.css'


class App extends Component {
  render() {
    return (
      <Router>
        <div class='container-all'>
          <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
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
        </div>
      </Router>
    );
  }
}

export default App;