import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { debounce } from 'lodash'
import {
  selectList,
  selectLoading,
  selectQuery,
  selectSearched,
  addQuery,
  fetchSearchResult,
} from './slice'
import ListItem from '../../components/ListItem'
import Root from './style'

const Search = () => {
  const list = useSelector(selectList)
  const loading = useSelector(selectLoading)
  const query = useSelector(selectQuery)
  const searched = useSelector(selectSearched)
  const dispatch = useDispatch()

  const debouncedFetch = useCallback(
    debounce((query) => {
      dispatch(fetchSearchResult(query))
      dispatch(addQuery(query))
    }, 600),
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
        defaultValue={query}
        onChange={(e) => handleChange(e)}
      />
      <ul>
        {searched ? (
          loading ? (
            <p className="message">Loading...</p>
          ) : list.length > 0 ? (
            list.map((item) => <ListItem item={item} key={item.id} />)
          ) : (
            <p className="message">No result</p>
          )
        ) : null}
      </ul>
    </Root>
  )
}

export default Search
