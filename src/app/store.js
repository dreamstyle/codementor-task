import { configureStore } from '@reduxjs/toolkit'
import searchReducer from '../containers/search/slice'

export default configureStore({
  reducer: {
    search: searchReducer,
  },
})
