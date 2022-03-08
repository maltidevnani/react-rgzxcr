import React from 'react';

export default class LatComponent extends React.Component {
  state = { lat: null, errorMsg: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (pos) => this.setState({ lat: pos.coords.latitude }),
      (err) => this.setState({ errorMsg: err.errorMsg })
    );
  }
  render() {
    if (this.state.errorMsg) {
      return <div>eror : {this.state.errorMsg}</div>;
    } else if (this.state.lat) {
      return <div>latitude : {this.state.lat}</div>;
    }
    return <div>loading</div>;
  }
}
