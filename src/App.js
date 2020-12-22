import React from 'react';
import logo from './logo.svg';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';
// import TimelineEvent from './components/TimelineEvent';

function App() {
  // console.log(timelineData);

  // const timelineEventData = {
  //   person: timelineData.events[0].person,
  //   status: timelineData.events[0].status,
  //   timeStamp: timelineData.events[0].timeStamp
  // }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">ch@tter</h1>
      </header>
      <main className="App-main">
        {console.log(timelineData.events)}
        <Timeline events={timelineData.events} />
      </main>
    </div>
  );
}

export default App;
