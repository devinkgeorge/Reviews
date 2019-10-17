import React from 'react';

const ReviewTitle = props => {
  return (
    <div>
      <span className="review-stars">This is the num of stars: {props.rating}</span>
      <span className="review-title-text">{props.title}</span>
    </div>
  )
}

export default ReviewTitle;