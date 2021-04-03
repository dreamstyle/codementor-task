import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectList, selectLoading, fetchSearchResult } from './slice'
import ListItem from '../../components/ListItem'
import Root from './style'

const Search = () => {
  const list = useSelector(selectList)
  const loading = useSelector(selectLoading)
  const dispatch = useDispatch()

  // TODO: Use onChange event (debounce!)
  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      const query = e.target.value
      dispatch(fetchSearchResult(query))
    }
  }

  return (
    <Root>
      <input
        className="input-search"
        type="text"
        placeholder="Please enter the keyword"
        onKeyUp={(e) => handleKeyUp(e)}
      />
      <ul>
        {loading ? (
          <p>Loading...</p>
        ) : list.length > 0 ? (
          list.map((item) => <ListItem item={item} key={item.id} />)
        ) : (
          <p>No result</p>
        )}
      </ul>
    </Root>
  )
}

export default Search
