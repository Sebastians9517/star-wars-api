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
        console.log(shipData.results)
      }

      render() {
        return (
            <>
            <div className="listItems">
            {this.state.results.map((shipName) => (
                <div key={shipName.index}>
                    <Link to={{
                        pathname: '/shipdetails',
                        state: { shipName }
                        }}>
                        <button>
                            {shipName.name}
                        </button>
                    </Link>
                </div>
            ))}
            </div>
            </>
        );
    }
}
export default ShipList;
