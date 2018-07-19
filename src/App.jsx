import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Main from './Main';
import About from './About';

class App extends Component {
  render() {
    return (
      <div>
        <Main />
        <About />
      </div>
    );
  }
}

export default hot(module)(App);