
import './App.css';
import React, { Component } from 'react';
import { Route } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar"
import ShipList from "../StarshipsList/StarshipsList";
import ShipDetails from "../StarshipsDetails/StarshipsDetails";

class App extends Component {
  state = {
    navItems: [
      {url: "/", name: "Home"},
      {url: "/shiplist", name: "All ships"}
    ]
   }

  render() {
    return (
      <>
       <div className="header">
        <h1>Galactic Shipyard</h1>
        <NavBar navItems={this.state.navItems} />
       </div>

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
