import React from 'react';

const User = props => {
  return (
    <div>
      <img className="user-thumbnail" src={props.user.userimg}></img>
      <span className="reviewer-name">{props.user.username}</span>
    </div>
  )
}

export default User;