import React from 'react';
import User from './user.js'
import ReviewTitle from './reviewTitle.js'

const Review = props => {
  return (
    <div>
      <User user={props.review.user_id} />
      <ReviewTitle rating={props.review.stars} title={props.review.title} />
    </div>
  )
}

export default Review;