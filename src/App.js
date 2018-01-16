import React, { Component } from 'react';
import ChartContainer from './containers/ChartContainer.jsx';

const songsUrl = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';

class App extends Component {
  render() {
    console.log('app render');
    return (
      <div className="App">
        <ChartContainer url={songsUrl}/>
      </div>
    );
  }
}

export default App;
