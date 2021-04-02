import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

const Tab = () => {
  const history = useHistory()
  const { pathname } = useLocation()

  const handleClick = (path) => {
    history.push(path)
  }

  return (
    <nav>
      <ul>
        <li>
          <button
            className={
              pathname === '/' || pathname === '/search' ? 'is-active' : null
            }
            onClick={() => handleClick('/search')}
          >
            Search
          </button>
        </li>
        <li>
          <button
            className={pathname === '/favorite' ? 'is-active' : null}
            onClick={() => handleClick('/favorite')}
          >
            Favorite
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Tab
