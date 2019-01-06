import React, {Component} from 'react';
import {DatePicker} from 'antd';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'antd/dist/antd.css';

class TimeRangeSelector extends Component {
    onStartChange = val => {
        this.props.handleOnSelect('startDate', val)
    };
    onEndChange = val => {
        this.props.handleOnSelect('endDate', val)
    };
    disabledStartDate = (startValue) => {
        const {endDate, minDate} = this.props;
        if (!startValue || !endDate) {
            return false;
        }
        return startValue.valueOf() > endDate.valueOf() || startValue.valueOf() < moment(minDate).valueOf();
    };

    disabledEndDate = (endValue) => {
        const {startDate} = this.props;
        if (!endValue || !startDate) {
            return false;
        }
        return endValue.valueOf() <= startDate.valueOf() || endValue.valueOf() > moment().valueOf();
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
    minDate: PropTypes.string,
};

export default TimeRangeSelector;