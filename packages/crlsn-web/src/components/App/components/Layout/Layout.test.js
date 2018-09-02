import { shallow } from 'enzyme'
import React from 'react'

import Header from './components/Header'
import Layout from './Layout'

describe('<Layout />', () => {
  let props, wrapper

  beforeEach(() => {
    props = {
      children: <h1>{Math.random()}</h1>,
    }

    wrapper = shallow(<Layout {...props} />)
  })

  it('has the correct displayName', () => {
    expect(Layout.displayName).toBe('Layout')
  })

  it('renders correctly', () => {
    expect(wrapper.contains(
      <div className="layout">
        <Header />
        {props.children}
      </div>
    )).toBe(true)
  })
})
