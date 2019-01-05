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
    })
    it('should render company list', () => {
        const component = setUp();

    })
});

