import searchReducer, { initialState, addQuery } from './slice'

describe('actions', () => {
  it('should returns initial state', () => {
    const newState = searchReducer(undefined, {})
    expect(newState).toEqual(initialState)
  })

  // Doesn't add much value since we're using @reduxjs/toolkit
  // it('should create an action to add a query', () => {
  //   const payload = 'This is a pen'
  //   const expectedAction = {
  //     type: 'search/addQuery',
  //     payload,
  //   }
  //   expect(searchSlice.actions.addQuery(payload)).toEqual(expectedAction)
  // })

  it('should return correct state after addQuery', () => {
    const newState = searchReducer(initialState, addQuery('redux'))
    expect(newState.query).toEqual('redux')
  })
})
