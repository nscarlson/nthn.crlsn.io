import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from 'components/App'
import apollo from 'services/apollo'
import { createStore } from 'services/redux/store'

const init = () => {
  const store = createStore(window.__INITIAL_STATE__)

  const doRender = (App) => {
    render(
      <BrowserRouter>
        <ApolloProvider client={apollo} store={store}>
          <App />
        </ApolloProvider>
      </BrowserRouter>,
      document.getElementById('app'),
      () => {
        const initialState = document.getElementById('initial-state')

        if (initialState) {
          initialState.parentElement.removeChild(initialState)
        }
      }
    )
  }

  doRender(App)
}

export { init, module as m }
