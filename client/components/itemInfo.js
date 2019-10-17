import React from 'react';

const ItemInfo = props => {
  return (
    <div className="review-info-bar">
      { props.style ?
        <span className="review-info review-info-style">Style: {props.style}</span>
        :
        null
      }
      { props.size ?
        <span className="review-info review-info-size">Size: {props.size}</span>
        :
        null
      }
      { props.color ?
        <span className="review-info review-info-color">Color: {props.color}</span>
        :
        null
      }
      { props.verified ?
        <span className="review-info review-info-verified">Verified Purchase</span>
        :
        null
      }
    </div>
  )
}

export default ItemInfo;
