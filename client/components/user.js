import React from 'react';

const User = props => {
  return (
    <div>
      <img className="user-thumbnail" src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png"></img>
      <span className="reviewer-name">This is the username for user id {props.user}</span>
    </div>
  )
}

export default User;