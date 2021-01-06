import React, { Component } from 'react';
import { getAllStarships } from "../../services/sw-api";
import { Link } from "react-router-dom";

class ShipList extends Component {
    state = {
        results: []
     }

     async componentDidMount() {
        const shipData = await getAllStarships()
        this.setState({ results: shipData.results })
      }

    render() {
        return (
            <>
              <h1>Starships List
                {this.state.results.map((shipName, idx) => (
                    <div key={idx}>
                        <Link to={{
                            pathname: '/starships',
                            state: { shipName }
                        }}>
                        {shipName.name}
                        </Link>
                    </div>
                ))}
               </h1>
            </>
         );
    }
}

export default ShipList;
