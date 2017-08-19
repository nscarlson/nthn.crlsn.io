import { shallow } from 'enzyme'
import React from 'react'
import Helmet from 'react-helmet'

import ClientStyles from './components/ClientStyles'
import FacebookLoginHash from './components/FacebookLoginHash'
import Favicon from './components/Favicon'
import GoogleAnalytics from './components/GoogleAnalytics'
import Viewport from './components/Viewport'
import WebAppCapable from './components/WebAppCapable'
import WebAppIcon from './components/WebAppIcon'
import WebAppStatusBar from './components/WebAppStatusBar'

import Head from './Head'

jest.mock('react-helmet')
jest.mock('./components/ClientStyles', () => () => null)

describe('<Head />', () => {
  let props, wrapper

  beforeEach(() => {
    props = {
      children: 'test',
      initialState: {},
    }

    wrapper = shallow(<Head {...props} />)
  })

  it('renders the content', () => {
    const { base, link, meta, script, title } = Helmet.rewind()

    expect(wrapper.contains(
      <head>
        {base.toComponent()}
        {title.toComponent()}
        {meta.toComponent()}
        {link.toComponent()}
        {script.toComponent()}

        <GoogleAnalytics />
        <ClientStyles />
        <FacebookLoginHash />
        <Favicon />
        <Viewport />
        <WebAppIcon />
        <WebAppCapable />
        <WebAppStatusBar />
      </head>
    )).toBe(true)
  })
})
