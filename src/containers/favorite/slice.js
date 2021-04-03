import { createSlice } from '@reduxjs/toolkit'

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    list: [
      {
        id: 1753,
        title: 'Why React.js Trumps Angular 2 (and 1)',
        author_name: 'Tendai Mutunhire',
        categories: ['reactjs', 'AngularJS', 'angular2'],
      },
    ],
  },
  reducers: {},
})

export const {} = favoriteSlice.actions

export const selectList = (state) => state.favorite.list

export default favoriteSlice.reducer
