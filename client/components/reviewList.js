import React from 'react';
import Review from './review.js'

const ReviewList = (props) => {
  return (
    <div>
      <h5 className="number-reviews-header">{props.currentProductReviews.length} Amish reviews</h5>
      <div>This is where the dropdown to sort reviews will be</div>
      <div>
        {
          props.currentProductReviews.map( currentReview => {
            return (
              <Review review={currentReview} key={currentReview.review_id} />
            )
          })
        }
      </div>
      <div className="see-all-reviews-div">
        <a href="URLforAllReviewsPage" className="see-all-reviews">
          See all {props.currentProductReviews.length} Amish reviews
        </a>
      </div>
      <button className="write-review-button">Write an Amish review</button>
    </div>
  )
}

export default ReviewList;