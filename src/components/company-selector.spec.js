import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CompanySelector from './company-selector';

Enzyme.configure({adapter: new Adapter()});

describe('<CompanySelector />', () => {
    function setUp(props) {
        return mount(<CompanySelector {...props} />)
    }

    it('should Render', () => {
        const component = setUp();
        expect(component.exists()).toEqual(true)
    });
    it('should render company list', () => {
        const component = setUp();
        const selector = component.find('select');
        expect(selector.find('.option-test-class').exists()).toEqual(true)
    });
    it('should handle on select', () => {
        let selected = '';
        const spy = ticker => selected = ticker;
        const component = setUp({handleOnSelect: spy});
        expect(selected).toEqual('')
        component.find('.option-test-class').at(0).simulate('change');
        expect(selected).toEqual('A')
    })
});

