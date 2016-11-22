import React, { Component } from 'react';
import Header from './layout/Header';

var ReactGridLayout = require('react-grid-layout');



class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
