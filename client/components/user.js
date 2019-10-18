import React from 'react';

const User = props => {
  return (
    <div className="reviewer-container">
      <div className="reviewer-thumbnail-wrapper">
        <img
          className="reviewer-thumbnail"
          src={props.user.userimg}
        >
        </img>
      </div>
      <div className="reviewer-name-wrapper">
        <span className="reviewer-name">
          {props.user.username}
        </span>
      </div>
    </div>
  )
}

export default User;