/**
 * @jest-environment jsdom
 */

import { expect } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'

import Navbar from '../../components/Navbar'

describe('<Navbar/>', () => {
  test('renders', () => {
    const wrapper = shallow(<Navbar/>)
    expect(wrapper).to.not.equal(undefined)
  })
})
