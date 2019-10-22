import React from 'react';
import Review from './review.js'

const ReviewList = (props) => {
  return (
    <div>
      {
        props.currentProductReviews &&
        <h3 className="number-reviews-header">
          {props.currentProductReviews.length} Amish reviews
        </h3>
      }
      <div className="reviews-sorter-container">
        <span data-action="reviews:filter-action:change">
          <span className="reviews-dropdown-container">
            <select
              name=""
              autoComplete="off"
              tabIndex="0"
              className="reviews-dropdown"
              aria-pressed="false"
            >
              <option
                value="helpful"
                className="reviews-sort-order-option"
              >
                Top Reviews
              </option>
              <option
                value="recent"
                className="reviews-sort-order-option"
              >
                Most recent
              </option>
            </select>
            <span
              tabIndex="-1"
              className="reviews-dropdown-button"
              aria-hidden="true"
            >
              <span className="review-button-inner">
                <span
                  className="review-button-text"
                  data-action="a-dropdown-button"
                  role="button"
                  aria-hidden="true"
                >
                  <span className="review-dropdown-prompt">
                    Top Reviews
                  </span>
                </span>
                <i className="reviews-dropdown-icon"></i>
              </span>
            </span>
          </span>
        </span>
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
              See all {props.currentProductReviews.length} Amish reviews
            </a>
          </div>
          <div>
            <button className="review-button">
              Write an Amish review
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewList;