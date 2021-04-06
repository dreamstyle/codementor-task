import { configureStore } from '@reduxjs/toolkit'
import searchReducer from '../containers/Search/slice'
import favoriteReducer from '../containers/Favorite/slice'

export default configureStore({
  reducer: {
    search: searchReducer,
    favorite: favoriteReducer,
  },
})
