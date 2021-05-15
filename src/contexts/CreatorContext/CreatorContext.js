import * as React from 'react'
import { node } from 'prop-types'

function creatorApi (endpoint) {
  return window
    .fetch(`api/${endpoint}.json`, { method: 'GET' })
    .then(async response => {
      if (response.ok) {
        return await response.json()
      } else {
        const errorMessage = await response.text()
        return Promise.reject(new Error(errorMessage))
      }
    })
}

const CreatorContext = React.createContext()

function CreatorProvider ({ children }) {
  const [creator, setCreator] = React.useState({})

  React.useEffect(() => {
    getCreator()
  }, [])

  async function getCreator () {
    try {
      setCreator(
        await Promise.all([
          creatorApi(process.env.CREATOR_DETAIL_API),
          creatorApi(`${process.env.CREATOR_SUBSCRIBERS_LIST_API}_1`),
          creatorApi(process.env.CREATOR_CATALOG_API)
        ]).then(data =>
          data.reduce((data, { creator }) => Object.assign(data, creator), {})
        )
      )
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <CreatorContext.Provider value={{ creator, setCreator }}>
      {children}
    </CreatorContext.Provider>
  )
}

function useCreator () {
  const context = React.useContext(CreatorContext)

  if (context === undefined) {
    throw new Error('useCreator needs to be nested within a CreatorProvider')
  }

  return context
}

CreatorProvider.propTypes = {
  children: node.isRequired
}

export { CreatorProvider, useCreator }
