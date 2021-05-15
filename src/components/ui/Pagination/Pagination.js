import React from 'react'

import './Pagination.styles.css'

const PAGES = [1, 2, 3]

function Pagination () {
  return (
    <nav>
      <ol role='navigation' aria-label='Paginação' className='pagination'>
        {PAGES.map((_page, index) => (
          <li key={`page-${index}`} className='page-item'>
            <a
              aria-label={`Ir para a página ${index + 1} de ${PAGES.length}`}
              href='#'
              className={['page-link', index === 0 && 'current']
                .filter(Boolean)
                .join(' ')}
            />
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Pagination
