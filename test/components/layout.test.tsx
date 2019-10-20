import { expect } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'

import Layout from '../../components/Layout'

describe('<Layout/>', () => {
  test('renders', () => {
    const wrapper = shallow(<Layout/>)
    expect(wrapper).to.not.equal(undefined)
  })
})
