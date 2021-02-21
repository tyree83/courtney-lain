import React, { Component } from 'react';
// import { HashLink as Link } from 'react-router-hash-link';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

class App extends Component {
  render(){
    return (
    <div className="App">
    <h1>Home Page</h1>
    {console.log(this.props)}
    </div>
    );
  }
}

export default App;
