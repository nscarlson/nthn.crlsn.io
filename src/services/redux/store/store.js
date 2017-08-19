import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import promise from 'redux-promise'
import thunk from 'redux-thunk'

import apollo from 'services/apollo'
import reducers from 'services/redux/reducers'

const middlewares = [
  apollo.middleware(),
  thunk,
  promise,
]

const functions = [
  applyMiddleware(...middlewares),
]

const createPersistentStore = composeWithDevTools(
  ...functions
)(createStore)

const create = (initialState = {}) => createPersistentStore(
  reducers,
  initialState
)

export { create as createStore }
