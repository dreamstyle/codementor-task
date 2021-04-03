import { createSlice } from '@reduxjs/toolkit'

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    list: [],
  },
  reducers: {
    addFavorite: (state, { payload }) => {
      state.list.push(payload)
    },
    removeFavorite: (state, { payload: id }) => {
      const removeIndex = state.list.findIndex((el) => el.id === id)
      state.list.splice(removeIndex, 1)
    },
  },
})

export const { addFavorite, removeFavorite } = favoriteSlice.actions

export const selectList = (state) => state.favorite.list

export default favoriteSlice.reducer
