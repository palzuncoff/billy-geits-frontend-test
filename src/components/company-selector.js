import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {getCompanies} from '../utils';

function getOptions(arr) {
    return arr.map(opt => <option key={opt.Ticker} value={opt.Ticker}>З{opt.Name}</option>)
}

class CompanySelector extends Component {
    state = {
        companies: [],
    };

    componentDidMount() {
        const companies = getCompanies()
        this.setState({companies})
    }
    render() {
        const {companies} = this.state;
        return (
            <Fragment>
                <select name="company-selector" id="company-selector">
                    {getOptions(companies)}
                </select>
            </Fragment>
        )
    }
}

export default CompanySelector;
