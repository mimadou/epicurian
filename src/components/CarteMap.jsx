import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const style = {
  padding: "30px",
  width: "30%",
  height: "38%",
  margin :"auto"
};
class App extends Component {
  render() {
    return (
      <>
        <Map
          initialCenter={{
            lat: 48.8432917,
            lng: 2.4296209,
          }}
          google={this.props.google}
          zoom={14}
          containerStyle={style}
        />
        ;
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAd-lMASLmNgVlA0DEN5bm6zVBnSOYgm74",
})(App);