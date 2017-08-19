import { WEB_PORT } from 'liiist-config'

jest.mock('./services/HMR')
jest.mock('./services/Render')
jest.mock('./services/StaticFiles')

let app, init

describe('server', () => {
  beforeEach(() => {
    const server = require('./server')
    app = server.default
    init = server.init
  })

  it(`inits the server on port ${WEB_PORT}`, () => {
    jest.spyOn(app, 'listen').mockImplementation((port, cb) => cb())
    jest.spyOn(console, 'log').mockImplementation(() => {})

    init()

    expect(app.listen).toHaveBeenCalledWith(WEB_PORT, expect.anything())
  })
})
