import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {getCompanies} from '../utils';

function getOptions(arr) {
    return arr.map(opt => {
        return (
            <option
                className="option-test-class"
                key={opt.Ticker}
                value={opt.Ticker}
            >
                {opt.Name}
            </option>
        )
    })
}

class CompanySelector extends Component {
    state = {
        companies: [],
    };

    componentDidMount() {
        const companies = getCompanies();
        this.setState({companies})
    }

    handleSelect = e => {
        this.props.handleOnSelect(e.target.value)
    };
    render() {
        const {companies} = this.state;
        return (
            <Fragment>
                <select
                    name="company-selector"
                    id="company-selector"
                    onChange={this.handleSelect}
                >
                    {getOptions(companies)}
                </select>
            </Fragment>
        )
    }
}

CompanySelector.propTypes = {
    handleOnSelect: PropTypes.func,
};

export default CompanySelector;
