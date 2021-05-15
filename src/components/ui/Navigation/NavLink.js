import React from 'react'
import { arrayOf, oneOfType, node, string } from 'prop-types'

import './Navigation.styles.css'

function NavLink ({ children, classNames = [], to, ...props }) {
  return (
    <a
      href={to || '#'}
      className={`nav-link ${classNames.toString().replace(',', ' ')}`}
      {...props}
    >
      {children}
    </a>
  )
}

NavLink.propTypes = {
  children: node.isRequired,
  classNames: oneOfType([string, arrayOf(string)]),
  to: string
}

export default NavLink
