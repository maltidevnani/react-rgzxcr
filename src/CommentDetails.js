import React from 'react';

const CommentDetails = (props) => {
  return (
    <div className="comment">     
      <div>
        <a href="/" className="author">
          {props.authorName}
        </a>
        <div className="metaData">
          <span className="date">Today at 6:00 pm</span>
        </div>
        <div className="text">{props.comment}</div>
      </div>
    </div>
  );
};

export default CommentDetails;