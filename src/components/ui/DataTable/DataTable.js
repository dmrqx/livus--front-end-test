import React from 'react'
import { arrayOf, node, oneOfType, shape, string } from 'prop-types'

import './DataTable.styles.css'

function TableHeader ({ children, classNames = [], id }) {
  return (
    <th
      id={id}
      className={`table-header ${classNames.toString().replace(',', ' ')}`}
    >
      {children}
    </th>
  )
}

function DataTable ({ caption, headers, id, data = [] }) {
  return (
    !!data.length && (
      <>
        <table aria-describedby={id}>
          <caption id={id} className='sr-only'>
            {caption}
          </caption>
          {headers && (
            <thead>
              <tr>
                {headers.map(({ id, title }) => (
                  <TableHeader key={`table-header-${id}`} id={id}>
                    {title}
                  </TableHeader>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {data.map(({ id, name, subscriptionDate, tier }) => {
              return (
                <tr key={`subscriber-${id}`}>
                  <td headers={headers[0].id}>{name}</td>
                  <td headers={headers[1].id}>{subscriptionDate}</td>
                  <td headers={headers[2].id}>{tier.name}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </>
    )
  )
}

TableHeader.propTypes = {
  children: node.isRequired,
  classNames: oneOfType([string, arrayOf(string)]),
  id: string.isRequired
}

DataTable.propTypes = {
  caption: string.isRequired,
  headers: arrayOf(
    shape({
      id: string.isRequired,
      title: string.isRequired
    })
  ),
  id: string.isRequired,
  data: arrayOf(
    shape({
      classNames: oneOfType([string, arrayOf(string)]),
      headerId: string
    })
  ).isRequired
}

DataTable.TableHeader = TableHeader

export default DataTable
