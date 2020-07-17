import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import NavigationItems from './NavigationItems'
import NavigationItem from './NavigationItem/NavigationItem'

configure({ adapter: new Adapter() })

const basePath = ''

describe('<NavigationItems />', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<NavigationItems.WrappedComponent match={{url: basePath}} />)
    })

    it('should render 2 <NavigationItem /> if not auth', () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(2)
    })

    it('should render 3 <NavigationItem /> if auth', () => {
        wrapper.setProps({ isAuth: true })
        expect(wrapper.find(NavigationItem)).toHaveLength(3)
    })

    it('should contain a logout button', () => {
        wrapper.setProps({ isAuth: true })
        expect(wrapper.contains(
            <NavigationItem link={`${basePath}/logout`}>Logout</NavigationItem>
        )).toEqual(true)
    })
})
