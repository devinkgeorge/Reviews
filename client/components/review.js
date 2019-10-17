import React from 'react';
import User from './user.js';
import ReviewTitle from './reviewTitle.js';
import DateStamp from './dateStamp.js';
import ItemInfo from './itemInfo.js';

const Review = props => {
  return (
    <div>
      <User user={props.review.user_id} />
      <ReviewTitle rating={props.review.stars} title={props.review.title} />
      <DateStamp date={props.review.created} />
      <ItemInfo
        style={props.review.style}
        size={props.review.size}
        color={props.review.color}
        verified={props.review.verified}
      />
    </div>
  )
}

export default Review;