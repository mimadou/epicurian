import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    this.setState({ windowWidth: window.innerWidth });
  }

  render() {
    const { windowWidth } = this.state;

    const style = {
      padding: "30px",
      width: "30%", // Largeur par défaut
      height: "38%",
      margin: "auto"
    };

    const styleResponsive = {
     
      width: "100%", // Largeur responsive
      height: "48%",
      margin: "auto"
    };

    return (
      <div className="containerMaps">
        <Map
          initialCenter={{
            lat: 48.8432917,
            lng: 2.4296209,
          }}
          google={this.props.google}
          zoom={14}
          containerStyle={windowWidth > 877 ? style : styleResponsive}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAd-lMASLmNgVlA0DEN5bm6zVBnSOYgm74",
})(App);