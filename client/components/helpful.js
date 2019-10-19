import React from 'react';

const Helpful = props => {
  return (
    <div>
      { props.helpfuls > 0 &&
        <div className="helpful-number">
          {props.helpfuls} Amish found this helpful
        </div>
      }
      <div className="helpful-button-container">
        <span className="helpful-button">
          <span className="helpful-button-inner">
            Helpful
          </span>
        </span>
      </div>
      <a href="commentsPageUrl" className="review-comment-link">Comment</a>
      <a href="reportAbusePageUrl" className="report-abuse-link">Report abuse</a>
    </div>
  )
}

export default Helpful;