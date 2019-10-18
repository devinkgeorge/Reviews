import React from 'react';
import User from './user.js';
import ReviewTitle from './reviewTitle.js';
import DateStamp from './dateStamp.js';
import ItemInfo from './itemInfo.js';
import ReviewText from './reviewText.js';
import Helpful from './helpful.js';

const Review = props => {
  return (
    <div className="review-container">
      <User user={props.review.user} />
      <ReviewTitle
        rating={props.review.stars}
        title={props.review.title}
      />
      <DateStamp date={props.review.created} />
      <ItemInfo
        style={props.review.style}
        size={props.review.size}
        color={props.review.color}
        verified={props.review.verified}
      />
      <ReviewText body={props.review.body} />
      <Helpful helpfuls={props.review.helpfuls} />
    </div>
  )
}

export default Review;