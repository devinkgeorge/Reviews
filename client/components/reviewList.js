import React from 'react';
import Review from './review.js'

const ReviewList = (props) => {
  return (
    <div>
      <h5 className="number-reviews-header">{props.currentProductReviews.length} customer reviews</h5>
      <div>This is where the dropdown to sort reviews will be</div>
      <div>
        {
          props.currentProductReviews.map( currentReview => {
            return (
              <Review review={currentReview} />
            )
          })
        }
      </div>
    </div>
  )
}

export default ReviewList;