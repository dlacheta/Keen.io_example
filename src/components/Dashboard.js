import React from 'react';
import 'keen-dataviz/dist/keen-dataviz.css';
import Plot from 'react-plotly.js';
import client from '../config/keen-analysis';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { xData: '', yData: '' };
  }

  componentDidMount() {
    client
      .query({
        analysis_type: 'count',
        event_collection: 'pageviews',
        timeframe: 'this_31_days',
        group_by: ['page.info.path'],
      })
      .then((res) => {
        this.setState({
          xData: res.result.map(item => item['page.info.path']),
          yData: res.result.map(item => item.result),
        });
      });
  }

  render() {
    const { xData, yData } = this.state;
    return (
      <div>
        <Plot
          data={[{ type: 'bar', x: xData, y: yData }]}
          layout={{
            width: 600,
            height: 400,
            title: 'Pageviews',
          }}
        />
      </div>
    );
  }
}

export default Dashboard;
