import React from 'react';
import moment from 'moment';

const DateStamp = props => {
  return <div className="review-date-stamp">{moment(props.date).format('LL')}</div>
}

export default DateStamp;