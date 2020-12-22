import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  return(
    <ul className='timeline'>
      {props.events.map((event, index) => {
        return(
          <li key={index}>
            <TimelineEvent
              person={event.person}
              status={event.status}
              timeStamp={event.timeStamp} />
          </li>
        );
      })}
    </ul>
  );
}

export default Timeline;