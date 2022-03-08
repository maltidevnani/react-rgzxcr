import React from 'react';

export default class LatComponent extends React.Component {
  state = { lat: 40 };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (pos) => this.setState({ lat: pos.coords.latitude }),
      (err) => console.log(err)
    );
  }
  render() {
    return <div>latitude : {this.state.lat}</div>;
  }
}
