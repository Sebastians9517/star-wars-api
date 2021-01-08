import React, { Component } from "react";
import { shipDetails } from "../../services/sw-api";
class ShipDetails extends Component {
  state = {
    url: this.props.location.state.shipName.url,
    shipInfo: {},
  };
  async componentDidMount() {
    const shipInfo = await shipDetails(this.state.url);
    this.setState({ shipInfo });
  }
  render() {
    const { shipInfo } = this.state;
    return (
      <>
      <div className="shipDetails">
        {shipInfo.name ? (
          <>
          <div className="nameAndModel">
            <h2>{shipInfo.name}</h2>
            <h2>{shipInfo.model}</h2>
          </div>
          </>
        ) : (
          <>
            <p>Loading ship details...</p>
          </>
        )}
      </div>
      </>
    );
  }
}
export default ShipDetails;
