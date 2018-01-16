import React from 'react';
import ChartItem from '../components/ChartItem.jsx'

class ChartContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      top20: []
    }
  }

  componentDidMount() {
    console.log('ChartContainer componentDidMount');
    const url = this.props.url;
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      const chart = data.feed.entry;
      console.log('chart', chart);
      this.setState({top20: chart})
    })
    request.send();
  }

  render() {

    if (this.state.top20 === []) return null;
    return (
      <div id="chart_container">
        {this.state.top20.map(function(entry, index) {
          return (<ChartItem key={index} entry={entry} number={index+1}/>)
        })}
      </div>
    )
  }

}

export default ChartContainer;
