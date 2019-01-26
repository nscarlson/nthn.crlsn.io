import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import apollo from 'services/apollo'

import lists from './lists'
import modals from './modals'
import users from './users'

export default combineReducers({
  apollo: apollo.reducer(),
  form,
  lists,
  modals,
  routing,
  users,
})
