import React from 'react';

const ReviewTitle = props => {
  return (
    <div className="review-title-wrapper">
      <span
        className={"review-stars review-star-" + props.rating}
      >
      </span>
      <span className="review-letter-space"></span>
      <span className="review-title-text">
        {props.title}
      </span>
    </div>
  )
}

export default ReviewTitle;