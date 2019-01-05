import React, { Component } from 'react';
import CompanySelector from './components/company-selector';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CompanySelector/>
      </div>
    );
  }
}

export default App;
