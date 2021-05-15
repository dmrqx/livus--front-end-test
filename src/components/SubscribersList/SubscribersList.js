import React from 'react'

import { useCreator } from '../../contexts/CreatorContext'
import { DataTable } from '../ui'

import './SubscribersList.styles.css'

function formatDate ({ date, locale = 'pt-br' } = {}) {
  return new Intl.DateTimeFormat(locale).format(date)
}

function SubscribersList () {
  const {
    creator: { id, subscribers = [] }
  } = useCreator()

  const data = subscribers.map(
    ({ subscription_date: subscriptionDate, ...subscriber }) => ({
      ...subscriber,
      subscriptionDate: formatDate(new Date(subscriptionDate))
    })
  )

  const headers = [
    { id: 'subscriber-name', title: 'Assinante' },
    { id: 'subscription-date', title: 'Primeira assinatura' },
    { id: 'tier-name', title: 'Plano atual' }
  ]

  return (
    !!data.length && (
      <section className='page-content'>
        <div className='container container--center'>
          <DataTable
            caption='Sample caption'
            headers={headers}
            id={`subscribers-from-${id}`}
            data={data}
          />

          <nav className='pagination pagination--centered'>
            <ul className='pagination__pages nav--horizontal'>
              <li className='page-number'>
                <a href='#' className='page-link'>
                  1
                </a>
              </li>
              <li className='page-number'>
                <a href='#' className='page-link'>
                  2
                </a>
              </li>
              <li className='page-number'>
                <a href='#' className='page-link page-link--current'>
                  3
                </a>
              </li>
              <li className='page-number'>
                <a href='#' className='page-link'>
                  4
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    )
  )
}

export default SubscribersList
