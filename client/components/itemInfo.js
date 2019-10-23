import React from 'react';

const ItemInfo = props => {
  return (
    <div className="review-info-bar">
      { props.style &&
        <span className="review-info">
          Style: {props.style}
          <i className="review-text-separator"></i>
        </span>
      }
      { props.size &&
        <span className="review-info">
          Size: {props.size}
          <i className="review-text-separator"></i>
        </span>
      }
      { props.color &&
        <span className="review-info">
          Color: {props.color}
          <i className="review-text-separator"></i>
        </span>
      }
      { props.verified &&
        <span className="review-info-verified">
          Verified Purchase
        </span>
      }
    </div>
  )
}

export default ItemInfo;
