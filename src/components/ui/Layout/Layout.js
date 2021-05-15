import React from 'react'
import { node } from 'prop-types'

function Layout ({ children, footer, header }) {
  const FooterComponent = () => footer
  const HeaderComponent = () => header
  return (
    <>
      {header && <HeaderComponent />}
      {children}
      {footer && <FooterComponent />}
    </>
  )
}

Layout.propTypes = {
  children: node.isRequired,
  footer: node,
  header: node
}

export default Layout
