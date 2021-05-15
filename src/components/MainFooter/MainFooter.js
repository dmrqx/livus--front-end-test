import React from 'react'

import { Navigation, NavLink } from '../ui/Navigation'

import './MainFooter.styles.css'

const FOOTER_NAV_LINKS = [
  {
    linkGroup: {
      name: 'Comunidade',
      links: [{ textLabel: 'Creator Community' }]
    }
  },
  {
    linkGroup: {
      name: 'Social',
      links: [{ textLabel: 'Instagram' }, { textLabel: 'LinkedIn' }]
    }
  },
  {
    linkGroup: {
      name: 'Empresa',
      links: [{ textLabel: 'Sobre a Livus' }, { textLabel: 'Vagas' }]
    }
  },
  {
    linkGroup: {
      name: 'Ajuda',
      links: [{ textLabel: 'Fale Conosco' }]
    }
  }
]

function MainFooter () {
  return (
    <footer className='main-footer'>
      <div className='container container--center'>
        <div>
          <img
            src='/brand/logo--light-bg.svg'
            alt='logotype'
            aria-hidden='true'
            role='presentation'
          />
        </div>

        <Navigation>
          {FOOTER_NAV_LINKS.map(({ linkGroup }, groupIndex) => (
            <Navigation.NavGroup
              key={`footer-nav-group-${groupIndex}`}
              name={linkGroup.name}
            >
              {linkGroup.links.map(({ textLabel }, index) => (
                <NavLink key={`footer-nav-group-${groupIndex}--${index}`}>
                  {textLabel}
                </NavLink>
              ))}
            </Navigation.NavGroup>
          ))}
        </Navigation>
      </div>
    </footer>
  )
}

export default MainFooter
