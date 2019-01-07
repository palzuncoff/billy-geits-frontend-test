import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as ReactD3 from 'react-d3-components';

class BarChart extends Component {
    render() {
        const {data = []} = this.props;
        return (
            <ReactD3.BarChart
                groupedBars
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

BarChart.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({}))
};

export default BarChart;