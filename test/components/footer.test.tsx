import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { expect } from 'chai'
import React from 'react'

import Footer from '../../components/Footer'

configure({
  adapter: new Adapter(),
})

describe('<Footer/>', () => {
  test('it has company name at start of address', () => {
    const wrapper = shallow(<Footer/>)
    expect(wrapper.find('address').text()).to.match(/^Signisto Ltd/)
  })
})
