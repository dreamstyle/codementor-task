import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import Algolia from '../../utils/algolia'
import searchReducer, {
  initialState,
  addQuery,
  fetchSearchResult,
} from './slice'

jest.mock('../../utils/algolia')
const mockStore = configureMockStore([thunk])

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

  it('should get pending and fulfilled state', async () => {
    const store = mockStore(initialState)
    const requestPayload = 'react'
    const responsePayload = [
      {
        id: 24273,
        title: 'React Pro? Just Starting Out?',
        author_name: 'Kyle Salter',
        categories: ['React', 'Front end development', 'Teaching'],
      },
    ]
    Algolia.getSearchResult.mockResolvedValueOnce(responsePayload)

    await store.dispatch(fetchSearchResult(requestPayload))

    expect(store.getActions()[0].type).toEqual(
      'search/fetchSearchResult/pending'
    )
    expect(store.getActions()[1].type).toEqual(
      'search/fetchSearchResult/fulfilled'
    )
    expect(store.getActions()[1].payload).toEqual(responsePayload)
  })

  it('should get pending and rejected state', async () => {
    const store = mockStore(initialState)
    const requestPayload = 'react'
    const responseError = new Error('Mock error')
    Algolia.getSearchResult.mockRejectedValueOnce(responseError)

    await store.dispatch(fetchSearchResult(requestPayload))

    expect(store.getActions()[0].type).toEqual(
      'search/fetchSearchResult/pending'
    )
    expect(store.getActions()[1].type).toEqual(
      'search/fetchSearchResult/rejected'
    )
  })
})
