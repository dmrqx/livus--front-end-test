import React from 'react'
import { render } from 'react-dom'

import { App } from './components'

import '../static/css/global.css'
;(function renderApp () {
  const bodyElement = document.body
  const appRootElement = bodyElement.querySelector('#app')

  render(<App />, appRootElement)
})()
