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

const Head = () => {
  const { base, link, meta, script, title } = Helmet.rewind()

  return (
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
  )
}

Head.displayName = 'Head'

export default Head
