import React from 'react'
import { render } from 'react-dom'

import { App } from './components'

import './index.css'

;(function renderApp () {
  const bodyElement = document.body
  const appRootElement = bodyElement.querySelector('#app')

  render(<App />, appRootElement)
})()
