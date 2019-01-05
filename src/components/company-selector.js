import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

class CompanySelector extends Component {
    render() {
        return (
            <Fragment>
                <select name="company-selector" id="company-selector"></select>
            </Fragment>
        )
    }
}

export default CompanySelector;
