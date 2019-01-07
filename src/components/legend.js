import React, {Component} from 'react';
import Proptypes from 'prop-types';

const colors = ['#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c']

class Legend extends Component {
    render() {
        const {labels} = this.props
        return (
            <div style={{display: 'flex'}}>
                {
                    labels.slice(1, 5).map((label, i) => {
                        return (
                            <div key={label} style={{
                                padding: '10px',
                                display: 'flex',
                                margin: 'auto'
                            }}>
                                <div
                                    style={{
                                        width: '20px',
                                        height: '20px',
                                        backgroundColor: colors[i],
                                    }}
                                />
                                - {label}
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

Legend.propTypes = {
    labels: Proptypes.arrayOf(Proptypes.string),
};

export default Legend;