import React from 'react'
import { useHistory } from 'react-router-dom'

const Tab = () => {
  const history = useHistory()

  const handleClick = (path) => {
    history.push(path)
  }

  return (
    <nav>
      <ul>
        <li>
          <button onClick={() => handleClick('/search')}>Search</button>
        </li>
        <li>
          <button onClick={() => handleClick('/favorite')}>Favorite</button>
        </li>
      </ul>
    </nav>
  )
}

export default Tab
