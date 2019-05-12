import React from 'react'
import { Provider } from 'react-redux'
import { store } from 'store'
import Routes from 'routes'
import Theme from 'themes/Default'

/**
 * App usando routes, store, redux e material-ui.
 */
const App = () => {
  return (
    <Theme>
      <Provider store={store}>
        <Routes />
      </Provider>
    </Theme>
  )
}

export default App
