import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { debounce } from 'lodash'
import { selectList, selectLoading, fetchSearchResult } from './slice'
import ListItem from '../../components/ListItem'
import Root from './style'

const Search = () => {
  const list = useSelector(selectList)
  const loading = useSelector(selectLoading)
  const dispatch = useDispatch()

  const debouncedFetch = useCallback(
    debounce((query) => dispatch(fetchSearchResult(query)), 600),
    []
  )

  const handleChange = (e) => {
    const query = e.target.value
    debouncedFetch(query)
  }

  return (
    <Root>
      <input
        className="input-search"
        type="text"
        placeholder="Please enter the keyword"
        onChange={(e) => handleChange(e)}
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
