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
import InputSearch from '../../components/InputSearch'
import ArticleList from '../../components/ArticleList'
import Root from './style'

const Search = () => {
  const list = useSelector(selectList)
  const loading = useSelector(selectLoading)
  const query = useSelector(selectQuery)
  const searched = useSelector(selectSearched)
  const dispatch = useDispatch()

  // eslint-disable-next-line
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
      <InputSearch initValue={query} handleChange={handleChange} />
      {searched &&
        (loading ? (
          <p data-testid="loading" className="message">
            Loading...
          </p>
        ) : list.length > 0 ? (
          <ArticleList list={list} />
        ) : (
          <p data-testid="no-result" className="message">
            No result
          </p>
        ))}
    </Root>
  )
}

export default Search
