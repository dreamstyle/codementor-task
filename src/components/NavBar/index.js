import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import Nav from './style'

const NavBar = () => {
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
            data-testid="search-tab"
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
            data-testid="favorite-tab"
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

export default NavBar
