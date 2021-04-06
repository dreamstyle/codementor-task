import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Algolia from '../../utils/algolia'

export const initialState = {
  value: 0,
  searched: false,
  loading: false,
  query: '',
  list: [],
}

export const fetchSearchResult = createAsyncThunk(
  'search/fetchSearchResult',
  async (query, { rejectWithValue }) => {
    try {
      const options = {
        attributesToRetrieve: ['id', 'title', 'author_name', 'categories'],
      }
      const response = await Algolia.getSearchResult(query, options)
      return response
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    addQuery(state, { payload: query }) {
      state.query = query
    },
  },
  extraReducers: {
    [fetchSearchResult.pending]: (state, action) => {
      state.loading = true
      state.searched = true
    },
    [fetchSearchResult.fulfilled]: (state, action) => {
      state.list = [...action.payload]
      state.loading = false
    },
    [fetchSearchResult.rejected]: (state, action) => {
      state.loading = false
    },
  },
})

export const { addQuery } = searchSlice.actions

export const selectList = (state) => state.search.list
export const selectLoading = (state) => state.search.loading
export const selectQuery = (state) => state.search.query
export const selectSearched = (state) => state.search.searched

export default searchSlice.reducer
