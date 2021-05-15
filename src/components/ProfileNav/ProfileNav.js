import React from 'react'

import { Navigation, NavLink } from '../ui/Navigation'

import './ProfileNav.styles.css'

const PROFILE_NAV_LINKS = [
  { textLabel: 'Assinantes', to: 'assinantes' },
  { textLabel: 'Cursos', to: 'cursos' }
]

function ProfileNav () {
  return (
    <div className='profile-nav'>
      <div className='container container--center'>
        <Navigation>
          <Navigation.NavList horizontal>
            {PROFILE_NAV_LINKS.map(({ textLabel }, index) => (
              <NavLink
                key={`profile-nav--${index}`}
                classNames={[index === 1 ? 'current' : '']}
              >
                {textLabel}
              </NavLink>
            ))}
          </Navigation.NavList>
        </Navigation>
      </div>
    </div>
  )
}

export default ProfileNav
