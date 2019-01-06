import React, { Component } from 'react';
import moment from 'moment';
import CompanySelector from './components/company-selector';
import TimeRangeSelector from './components/time-range-selector';
import {FetchDataDateRange} from './utils';
import {MIN_DATE} from './constants';
import './App.css';

class App extends Component {
  state = {
    data: null,
    ticker: 'HD',
    minDate: MIN_DATE,
    startDate: moment().subtract(7, 'days'),
    endDate: moment(),
    error: null,
  };

    getData = (ticker, start, end) => FetchDataDateRange(ticker, start, end)
        .catch(error => {
            this.setState({error});
            throw error
        })
        .then(res => this.setState({
            data: res.data.dataset,
            minDate: res.data.dataset.oldest_available_date,
        }));

  componentDidMount() {
    const {ticker, startDate, endDate} = this.state;
    const start = startDate.format('YYYY-MM-DD');
    const end = endDate.format('YYYY-MM-DD');
      return this.getData(ticker, start, end);

  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {ticker, startDate, endDate} = this.state;
    if (ticker !== prevState.ticker || startDate !== prevState.startDate || endDate !== prevState.endDate) {
      const start = startDate.format('YYYY-MM-DD');
      const end = endDate.format('YYYY-MM-DD');
        return this.getData(ticker, start, end);
    }
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
            minDate={this.state.minDate}
        />
      </div>
    );
  }
}

export default App;
