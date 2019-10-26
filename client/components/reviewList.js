import React from 'react';
import Review from './review.js'

const ReviewList = (props) => {
  return (
    <div>
      {
        props.currentProductReviews &&
        <h3 className="number-reviews-header">
          {props.currentProductReviews.length} farmer reviews
        </h3>
      }
      <div className="reviews-sorter-container">
        <select
          className="reviews-dropdown-button"
          onChange={() => props.sortReviews(props.currentProductReviews, event.target.value)}
          >
          <option
            className="reviews-sorter-option"
            value='top'
          >
            Top Reviews
          </option>
          <option
            className="reviews-sorter-option"
            value='recent'
          >
            Most recent
          </option>
        </select>
        <i className="reviews-dropdown-icon"></i>
      </div>
      <div className="review-list-container">
        {
          props.currentProductReviews.length > 0 &&
          props.currentProductReviews.map( currentReview => {
            return (
              <Review
                review={currentReview}
                key={currentReview.review_id}
                updateHelpfuls={props.updateHelpfuls}
              />
            )
          })
        }
        <div>
          <div className="see-all-reviews-container">
            <a href="URLforAllReviewsPage" className="see-all-reviews-link">
              See all {props.currentProductReviews.length} farmer reviews
            </a>
          </div>
          <div>
            <button className="review-button">
              Write a farmer review
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewList;