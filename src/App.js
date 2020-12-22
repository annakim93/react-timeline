import React from 'react';
import logo from './logo.svg';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';

function App() {
  // console.log(timelineData);

  const timelineEventData = {
    // person: timelineData.events[0].person,
    // status: timelineData.events[0].status,
    // timeStamp: timelineData.events[0].timeStamp
    person: 'Ada Lovelace',
    status: 'The Original programmer... old-school style, on PAPER.',
    timeStamp: '2018-05-18T22:12:03Z'
  }

  // Customize the code below
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Application title</h1>
      </header>
      <main className="App-main">
        <TimelineEvent 
          person={timelineEventData.person} 
          status={timelineEventData.status} 
          timeStamp={timelineEventData.timeStamp} />
      </main>
    </div>
  );
}

export default App;
