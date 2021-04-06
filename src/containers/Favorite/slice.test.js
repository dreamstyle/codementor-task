import favoriteReducer, {
  initialState,
  addFavorite,
  removeFavorite,
} from './slice'

describe('actions', () => {
  it('should returns initial state', () => {
    const newState = favoriteReducer(undefined, {})
    expect(newState).toEqual(initialState)
  })

  // it('should create an action to add favortie', () => {
  //   const payload = { id: 1, titile: 'hello world', author_name: 'nate' }
  //   const expectedAction = {
  //     type: 'favorite/addFavorite',
  //     payload,
  //   }
  //   expect(favoriteSlice.actions.addFavorite(payload)).toEqual(expectedAction)
  // })

  it('should add item after addFavorite', () => {
    const item = { id: 1, titile: 'hello world', author_name: 'nate' }
    const newState = favoriteReducer(initialState, addFavorite(item))
    expect(newState.list[0]).toEqual(item)
  })

  // it('should create an action to remove favortie', () => {
  //   const payload = 9527
  //   const expectedAction = {
  //     type: 'favorite/addFavorite',
  //     payload,
  //   }
  //   expect(favoriteSlice.actions.addFavorite(payload)).toEqual(expectedAction)
  // })

  it('should remove item by id after removeFavorite', () => {
    const state = { list: [{ id: 1 }, { id: 2 }, { id: 3 }] }

    const newState1 = favoriteReducer(state, removeFavorite(1))
    expect(newState1.list).toEqual([{ id: 2 }, { id: 3 }])

    const newState2 = favoriteReducer(newState1, removeFavorite(3))
    expect(newState2.list).toEqual([{ id: 2 }])
  })
})
