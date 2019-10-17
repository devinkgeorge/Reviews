import React from 'react';
import Review from 'review.js'

const ReviewList = (props) => {
  return (
    <div>
      {
        props.currentProductReviews.map( currentReview => {
          return (
            <Review review={currentReview} />
          )
        })
      }
    </div>
  )
}

export default ReviewList;