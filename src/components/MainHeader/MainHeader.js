import React from 'react'

import { Navigation, NavLink } from '../ui/Navigation'

import './MainHeader.styles.css'

const HEADER_NAV_LINKS = [
  { textLabel: 'Entrar' },
  { textLabel: 'Seja um Anfitrião' }
]

function MainHeader () {
  return (
    <header className='main-header'>
      <div className='container container--center'>
        <div className='livus-logo'>
          <img
            src='/brand/logo--dark-bg.svg'
            alt='logotype'
            aria-hidden='true'
            role='presentation'
          />
        </div>
        <Navigation>
          <Navigation.NavList horizontal>
            {HEADER_NAV_LINKS.map(({ textLabel }, index) => (
              <NavLink key={`header-nav--${index}`}>{textLabel}</NavLink>
            ))}
          </Navigation.NavList>
        </Navigation>
      </div>
    </header>
  )
}

export default MainHeader
