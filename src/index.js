import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
  const pos = window.navigator.geolocation.getCurrentPosition((pos) => console.log(pos), (err) => console.log(err));
  return (
    <div className="ui container comments">
      hiii
      {pos}    
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
