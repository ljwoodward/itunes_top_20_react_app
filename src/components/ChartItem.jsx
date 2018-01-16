import React from 'react';

// class CountryDetail extends React.Component {
  const ChartItem = function(props){
    if (!props.entry) return null;
    console.log(props.entry['im:image'][2].label);
    return (
      <div id="chart_item">
      <h2>{ props.number}</h2>
      <img src={props.entry['im:image'][2].label} alt="meaningful_text" height={props.entry['im:image'][2].attributes.height}/>
      <h2>{ props.entry.title.label }</h2>
      </div>
    );
  }


export default ChartItem;
