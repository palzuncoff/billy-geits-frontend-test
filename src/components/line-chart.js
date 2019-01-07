import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as ReactD3 from 'react-d3-components';

class LineChart extends Component {
    render() {
        const {data = []} = this.props;
        return (
            <ReactD3.LineChart
                className="LineChart"
                data={data}
                width={window.innerWidth}
                height={400}
                margin={{top: 10, bottom: 50, left: 50, right: 10}}
                xAxis={{label: "days"}}
                yAxis={{label: "$"}}
            />
        );
    }
}

LineChart.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({}))
};

export default LineChart;