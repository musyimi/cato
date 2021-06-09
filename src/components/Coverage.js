import React, { Component } from "react";
import Map from "../components/Map";

class Coverage extends Component {
  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          center={{ lat: -1.4288676849842539, lng: 36.97702791188 }}
          height="700px"
          zoom={15}
        />
      </div>
    );
  }
}

export default Coverage;
