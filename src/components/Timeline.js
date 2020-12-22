import React from 'react';
import PropTypes from 'prop-types';
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

Timeline.propTypes = {
  events: PropTypes.array.isRequired
};

export default Timeline;