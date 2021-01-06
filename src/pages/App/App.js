
import './App.css';
import React, { Component } from 'react';
import { Route } from "react-router-dom";
import ShipList from "../StarshipsList/StarshipsList";
import ShipDetails from "../StarshipsDetails/StarshipsDetails";

class App extends Component {
  state = {  }
  render() {
    return (
      <>
        <h1>App</h1>
        <a href="/shiplist">Shiplist</a>
        <Route
            exact path='/shiplist'
            render={() =>
            <ShipList
            />}
        />
        <Route
            exact path='/shipdetails'
            render={( {location} ) =>
            <ShipDetails
              location={location}
            />}
        />
      </>
     );
  }
}

export default App;
