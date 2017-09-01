import { Router } from 'express'

const HMR = Router()

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')

  const config = require('../../../../../webpack.config.client').default

  const compiler = webpack(config)

  HMR.use(webpackDevMiddleware(compiler, config.devServer))
}

export default HMR
