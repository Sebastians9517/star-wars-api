// import logo from '../../logo.svg';
import './App.css';
import React, { Component } from 'react';
import { Route } from "react-router-dom";
import ShipList from "../StarshipsList/StarshipsList"

class App extends Component {
  state = {  }
  render() {
    return (
      <>
        <h1>App</h1>
        <Route exact path='/shiplist' render={() => <ShipList />} />
      </>
     );
  }
}

export default App;
