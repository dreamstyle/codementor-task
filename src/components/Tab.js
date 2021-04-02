import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import Nav from './styles/TabStyle'

const Tab = () => {
  const history = useHistory()
  const { pathname } = useLocation()

  const handleClick = (path) => {
    history.push(path)
  }

  return (
    <Nav>
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
    </Nav>
  )
}

export default Tab
