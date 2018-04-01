import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

import EmotionalTransactions from './components/containers/EmotionalTransactions'

const App = ({ store }) => (
  <Provider store={store}>
    <EmotionalTransactions />
  </Provider>
)

App.propTypes = {
  store: PropTypes.object.isRequired,
}

export default App
