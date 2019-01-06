import React, { Component } from 'react';
import moment from 'moment';
import CompanySelector from './components/company-selector';
import TimeRangeSelector from './components/time-range-selector';
import {FetchDataDateRange} from './utils';
import './App.css';

class App extends Component {
  state = {
    data: null,
    ticker: 'HD',
    startDate: moment().subtract(7, 'days'),
    endDate: moment(),
  };

  componentDidMount() {
    const {ticker, startDate, endDate} = this.state;
    const start = startDate.format('YYYY-MM-DD');
    const end = endDate.format('YYYY-MM-DD');
    FetchDataDateRange(ticker, start, end)
        .catch(e => {
          throw e
        })
        .then(res => this.setState({data: res}))

  }

  componentDidUpdate(prevProps, prevState, snapshot) {
  }

  handleOnTickers = ticker => {
    this.setState({ticker})
  };
  handleOnDate = (prop, val) => {
    this.setState({[prop]: val})
  };
  render() {
    return (
      <div className="App">
        <CompanySelector handleOnSelect={this.handleOnTickers}/>
        <TimeRangeSelector
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            handleOnSelect={this.handleOnDate}
        />
      </div>
    );
  }
}

export default App;
