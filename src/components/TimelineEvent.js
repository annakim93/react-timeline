import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  console.log(props)
  return (
    <div className='timeline-event'>
      <div className='event-person'>{props.data.person}</div>
      <div className='event-status'>{props.data.status}</div>
      <div className='event-time'>{props.data.timeStamp}</div>
    </div>
  );
}

export default TimelineEvent;