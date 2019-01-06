import React, { Component } from 'react';
import moment from 'moment';
import CompanySelector from './components/company-selector';
import TimeRangeSelector from './components/time-range-selector';
import './App.css';

class App extends Component {
  state = {
    ticker: '',
    startDate: moment().subtract(7, 'days'),
    endDate: moment(),
  };
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
