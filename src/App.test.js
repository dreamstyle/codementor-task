import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createMemoryHistory } from 'history'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import store from './app/store'
import App from './App'

const setup = () => {
  const history = createMemoryHistory()
  const utils = render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  )

  return {
    ...utils,
  }
}

describe('<App />', () => {
  it('should have search input and navigation tab', () => {
    const { getByTestId } = setup()

    expect(getByTestId('input-search')).toBeVisible()
    expect(getByTestId('search-tab')).toBeVisible()
    expect(getByTestId('favorite-tab')).toBeVisible()
  })

  it('should switch route by clicking the nav', async () => {
    const { getByTestId, queryByTestId, findByTestId } = setup()

    userEvent.click(getByTestId('favorite-tab'))
    expect(queryByTestId('input-search')).not.toBeInTheDocument()

    userEvent.click(getByTestId('search-tab'))
    expect(await findByTestId('input-search')).toBeInTheDocument()
  })
})
