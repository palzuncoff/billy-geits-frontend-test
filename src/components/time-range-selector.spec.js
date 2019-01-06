import React from 'react';
import moment from 'moment';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TimeRangeSelector from './time-range-selector';

Enzyme.configure({adapter: new Adapter()});

describe('<TimeRangeSelector/>', () => {
    function setUp(props) {
        return mount(<TimeRangeSelector {...props} />)
    }

    it('should render', () => {
        const component = setUp()
        expect(component.exists()).toEqual(true)
    })
    it('should change date', () => {
        let state = {
            startDate: null,
            endDate: null,
        };
        const props = {
            startDate: moment().subtract(7, 'days'),
            endDate: moment(),
            handleOnSelect: (prop, val) => {
                state = {
                    ...state,
                    [prop]: val
                }
            }
        };
        const component = setUp(props);
        expect(component.exists()).toEqual(true)
    })
});