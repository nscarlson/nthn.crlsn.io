import express from 'express'

import { WEB_PORT } from 'liiist-config'

import HMR from './services/HMR'
import Render from './services/Render'
import StaticFiles from './services/StaticFiles'

const app = express()

app.use(HMR)
app.use(StaticFiles)
app.use(Render)

const init = () => app.listen(WEB_PORT, () => {
  console.log('Listening on port', WEB_PORT)
})

export { init }
export default app
