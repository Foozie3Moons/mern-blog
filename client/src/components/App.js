import React, { Component } from 'react';
import '../App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import Home from './Home.js';
import Favorites from './Favorites.js';
import About from './About.js';
import Post from './Post';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/post'>Post</Link>
            <Link to='/favorites'>Favorites</Link>
            <Link to='/about'>About</Link>
          </nav>
          <Route exact path='/' component={Home} />
          <Route path='/post' component={Post} />
          <Route path='/favorites' component={Favorites} />
          <Route path='/about' component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
