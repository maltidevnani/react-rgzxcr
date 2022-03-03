import React from 'react';

export default class LatComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: 40 };
  }
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (pos) => console.log(pos),
      (err) => console.log(err)
    );
    return <div>latitude : {this.state.lat}</div>;
  }
}
