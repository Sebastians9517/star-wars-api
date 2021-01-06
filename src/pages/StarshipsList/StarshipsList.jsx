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
            {this.state.results.map((shipName) => (
                <div key={shipName.index}>
                    <Link to={{
                        pathname: '/shipdetails',
                        state: { shipName }
                        }}>
                    {shipName.name}
                    </Link>
                </div>
            ))}
            </>
        );
    }
}
export default ShipList;
