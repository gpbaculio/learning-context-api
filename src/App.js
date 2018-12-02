import React, { Component } from 'react';
import Nav from './Nav'
import Provider from './Provider'

import './App.css';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Provider> {/* 1. Wrap the children with the Provider Component */}
          <Nav /> {/* 2. Then all the children from Nav will have access to the Context */}
        </Provider>
      </div>
    );
  }
}

export default App;