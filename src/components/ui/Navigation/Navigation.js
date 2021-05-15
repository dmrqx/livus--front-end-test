import React from 'react'
import { arrayOf, bool, element, node, oneOfType, string } from 'prop-types'

const renderNavItems = items =>
  React.Children.map(items, child => {
    return <NavLinkWrapper {...child.props}>{child}</NavLinkWrapper>
  })

function NavGroup ({ children, name }) {
  return (
    <ul className='nav-group'>
      {!!name && <li className='nav-group-name'>{name}</li>}

      {renderNavItems(children)}
    </ul>
  )
}

function NavLinkWrapper ({ children, classNames = [], ...props }) {
  return (
    <li className={`nav-link ${classNames.toString().replace(',', ' ')}`}>
      {React.cloneElement(children, { classNames, ...props })}
    </li>
  )
}

function NavList ({ children, classNames = [], horizontal }) {
  return (
    <ul
      className={`nav-list ${horizontal && 'nav--horizontal'} ${classNames
        .toString()
        .replace(',', ' ')}`}
    >
      {renderNavItems(children)}
    </ul>
  )
}

function Navigation ({ children }) {
  return <nav className='nav'>{children}</nav>
}

NavGroup.propTypes = {
  children: node.isRequired,
  name: string
}

NavList.propTypes = {
  children: node.isRequired,
  classNames: oneOfType([string, arrayOf(string)]),
  horizontal: bool
}

NavLinkWrapper.propTypes = {
  children: element.isRequired,
  classNames: oneOfType([string, arrayOf(string)])
}

Navigation.propTypes = {
  children: node.isRequired
}

Navigation.NavGroup = NavGroup
Navigation.NavList = NavList

export default Navigation
