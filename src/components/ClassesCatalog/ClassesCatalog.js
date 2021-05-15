import React from 'react'

import { useCreator } from '../../contexts/CreatorContext'

import './ClassesCatalog.styles.css'

function ClassesCatalog () {
  const {
    creator: { classes_catalog: classesCatalog }
  } = useCreator()

  return (
    <section className='page-content page-content--crop-horizontal'>
      {classesCatalog && (
        <div className='container container--center'>
          <section className='content-lane'>
            <header className='content-lane__header'>
              <h1 className='content-lane__title'>{classesCatalog.title}</h1>

              <nav className='lane-nav'>
                <ul className='nav--horizontal'>
                  <li
                    className='lane-nav__direction lane-nav__direction--left lane-nav__direction--inactive'
                    aria-describedby='previous-item'
                  >
                    <a href='#' id='previous-item' className='sr-only'>
                      Previous
                    </a>
                  </li>
                  <li
                    className='lane-nav__direction lane-nav__direction--right'
                    aria-describedby='next-item'
                  >
                    <a href='#' id='next-item' className='sr-only'>
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </header>

            <div className='card-list card-list--horizontal'>
              {classesCatalog.classes.map(
                ({ description, id, thumbnail_url: thumbnailUrl, title }) => (
                  <div key={`class-${id}`} className='card'>
                    <div className='card__thumbnail'>
                      <img src={thumbnailUrl} alt='' />
                    </div>
                    <div className='card__content'>
                      <p className='card__content-title'>{title}</p>
                      <p>{description}</p>
                    </div>
                  </div>
                )
              )}
            </div>
          </section>
        </div>
      )}
    </section>
  )
}

export default ClassesCatalog
