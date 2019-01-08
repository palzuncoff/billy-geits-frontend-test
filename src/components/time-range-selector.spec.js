import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TimeRangeSelector from './time-range-selector';

Enzyme.configure({adapter: new Adapter()});

describe('<TimeRangeSelector/>', () => {
    function setUp(props) {
        return mount(<TimeRangeSelector {...props} />)
    }

    it('should render', () => {
        const component = setUp();
        const startDate = component.find('.test-start-date');
        const endDate = component.find('.test-end-date');
        expect(component.find('.test-start-date').exists()).toEqual(true);
        expect(component.find('.test-end-date').exists()).toEqual(true)
    });
});