import React from 'react';
import Review from './review.js'

const ReviewList = (props) => {
  return (
    <div>
      <h3 className="number-reviews-header">{props.currentProductReviews.length} Amish reviews</h3>
      <div className="reviews-sorter-container">
        <span className="reviews-sorter">Top Reviews</span>
      </div>
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