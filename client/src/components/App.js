import React, { Component } from 'react';
import '../App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import Home from './Home.js';
import Favorites from './Favorites.js';
import Weather from './Weather.js';
import Blog from './Blog';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/favorites'>Favorites</Link>
            <Link to='/Weather'>Weather</Link>
          </nav>
          <Route exact path='/' component={Home} />
          <Route path='/blog' component={Blog} />
          <Route path='/favorites' component={Favorites} />
          <Route path='/Weather' component={Weather} />
        </div>
      </Router>
    );
  }
}

export default App;
