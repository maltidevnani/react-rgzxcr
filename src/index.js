import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetails';
import Card from './Card';

const App = () => {
  return (
    <div className="ui container comments">
      <Card>
        <CommentDetail authorName="Malti" comment="Nice" />
      </Card>
      <CommentDetail authorName="Rahul" comment="very nice" />
      <CommentDetail authorName="Whosoever" comment="awesomly nice" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
