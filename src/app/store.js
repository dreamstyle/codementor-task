import { configureStore } from '@reduxjs/toolkit'
import searchReducer from '../containers/search/slice'
import favoriteReducer from '../containers/favorite/slice'

export default configureStore({
  reducer: {
    search: searchReducer,
    favorite: favoriteReducer,
  },
})
