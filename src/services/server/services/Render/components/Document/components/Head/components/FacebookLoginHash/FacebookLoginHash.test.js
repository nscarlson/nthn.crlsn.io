import { shallow } from 'enzyme'
import React from 'react'

import FacebookLoginHash from './FacebookLoginHash'

describe('<FacebookLoginHash />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<FacebookLoginHash />)
  })

  it('has the correct displayName', () => {
    expect(FacebookLoginHash.displayName).toBe('FacebookLoginHash')
  })

  it('renders a script tag', () => {
    expect(wrapper.find('script').length).toBe(1)
  })
})
