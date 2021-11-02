import React from 'react'
import ReactDOM from 'react-dom'
import Apps from './Apps'
import { Provider } from 'react-redux'
import './index.css'
import { store } from './store/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Apps />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
