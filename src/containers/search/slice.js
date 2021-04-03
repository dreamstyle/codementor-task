import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Algolia from '../../utils/algolia'

export const fetchSearchResult = createAsyncThunk(
  'search/fetchSearchResult',
  async (query, { rejectWithValue }) => {
    try {
      const options = {
        attributesToRetrieve: ['id', 'title', 'author_name', 'categories'],
      }
      const response = await Algolia.getSearchResult(query, options)
      console.log({ response })
      return response
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    value: 0,
    loading: false,
    query: '',
    list: [],
  },
  reducers: {
    addQuery(state, { payload: query }) {
      state.query = query
    },
  },
  extraReducers: {
    [fetchSearchResult.pending]: (state, action) => {
      console.log('pending')
      state.loading = true
    },
    [fetchSearchResult.fulfilled]: (state, action) => {
      console.log('fulfilled')
      state.list = [...action.payload]
      state.loading = false
    },
    [fetchSearchResult.rejected]: (state, action) => {
      console.log('rejected')
      state.loading = false
    },
  },
})

export const { addQuery } = searchSlice.actions

export const selectList = (state) => state.search.list
export const selectLoading = (state) => state.search.loading
export const selectQuery = (state) => state.search.query

export default searchSlice.reducer
