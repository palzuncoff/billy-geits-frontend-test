import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Description extends Component {
    render() {
        return (
            <p dangerouslySetInnerHTML={{__html: this.props.text}}/>
        )
    }
}

Description.propTypes = {
    text: PropTypes.string,
};

export default Description;