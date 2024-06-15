import React, { Component } from 'react';
import './App.css';
import  Speed from './pages/speed-test'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


class App extends Component {
  render() {
    return (
      <div className="App">
         <Speed/>
      </div>
    );
  }
}

export default App;
