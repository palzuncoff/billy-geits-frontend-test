import React, {Component} from 'react';
import {DatePicker} from 'antd';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';

class TimeRangeSelector extends Component {
    onStartChange = val => {
        this.props.handleOnSelect('startDate', val)
    };
    onEndChange = val => {
        this.props.handleOnSelect('endDate', val)
    };
    disabledStartDate = (startValue) => {
        const endValue = this.props.endDate;
        if (!startValue || !endValue) {
            return false;
        }
        return startValue.valueOf() > endValue.valueOf();
    };

    disabledEndDate = (endValue) => {
        const startValue = this.props.startDate;
        if (!endValue || !startValue) {
            return false;
        }
        return endValue.valueOf() <= startValue.valueOf();
    };

    render() {
        const {startDate, endDate} = this.props;
        return (
            <div>
                <DatePicker
                    disabledDate={this.disabledStartDate}
                    showTime
                    format="YYYY-MM-DD"
                    value={startDate}
                    onChange={this.onStartChange}
                />
                <DatePicker
                    disabledDate={this.disabledEndDate}
                    showTime
                    format="YYYY-MM-DD"
                    value={endDate}
                    onChange={this.onEndChange}
                />
            </div>
        )
    }
}

TimeRangeSelector.propTypes = {
    handleOnSelect: PropTypes.func,
    startDate: PropTypes.shape({}),
    endDate: PropTypes.shape({}),
};

export default TimeRangeSelector;