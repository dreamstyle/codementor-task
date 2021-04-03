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
    list: [],
  },
  reducers: {},
  extraReducers: {
    [fetchSearchResult.pending]: (state, action) => {
      console.log('pending')
    },
    [fetchSearchResult.fulfilled]: (state, action) => {
      console.log('fulfilled')
      state.list = [...action.payload]
    },
    [fetchSearchResult.rejected]: (state, action) => {
      console.log('rejected')
    },
  },
})

export const {} = searchSlice.actions

export const selectList = (state) => state.search.list

export default searchSlice.reducer
