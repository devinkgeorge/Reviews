import React from 'react';

const Helpful = props => {
  return (
    <div>
      { props.helpfuls > 0 &&
        <div className="helpful-number">
          {props.helpfuls} farmers found this helpful
        </div>
      }
      <div className="helpful-button-container">
        <span className="helpful-button-outer">
          <span className="helpful-button-inner">
            <button
              className="helpful-button"
              onClick={() => props.updateHelpfuls((props.helpfuls + 1), props.reviewId)}
            >
              <div className="helpful-button-text">
                Helpful
              </div>
            </button>
          </span>
        </span>
      </div>
      <i className="review-text-separator"></i>
      <a href="commentsPageUrl" className="review-footer-link">Comment</a>
      <span className="review-footer">
        <i className="review-text-separator"></i>
        <span>
          <a href="reportAbusePageUrl" className="review-footer-link">
            Report abuse
          </a>
        </span>
      </span>
    </div>
  )
}

export default Helpful;