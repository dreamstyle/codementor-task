import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createMemoryHistory } from 'history'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import store from '../../app/store'
import NavBar from './index'

const setup = () => {
  const history = createMemoryHistory()
  const utils = render(
    <Provider store={store}>
      <Router history={history}>
        <NavBar />
      </Router>
    </Provider>
  )

  return {
    ...utils,
  }
}

describe('<NavBar />', () => {
  it('should trigger click event when clicking the tab', () => {
    const { getByTestId } = setup()
    global.onclick = jest.fn()

    userEvent.click(getByTestId('favorite-tab'))
    expect(onclick).toHaveBeenCalledTimes(1)

    userEvent.click(getByTestId('search-tab'))
    expect(onclick).toHaveBeenCalledTimes(2)
  })

  it('should have active style when clicking the tab', () => {
    const { getByTestId } = setup()

    userEvent.click(getByTestId('favorite-tab'))
    expect(getByTestId('favorite-tab')).toHaveClass('is-active')

    userEvent.click(getByTestId('search-tab'))
    expect(getByTestId('search-tab')).toHaveClass('is-active')
  })

  it('should have active style when pathname changed', () => {
    const history = createMemoryHistory()
    const { getByTestId } = render(
      <Provider store={store}>
        <Router history={history}>
          <NavBar />
        </Router>
      </Provider>
    )

    history.push('/favorite')
    expect(getByTestId('favorite-tab')).toHaveClass('is-active')

    history.push('/search')
    expect(getByTestId('search-tab')).toHaveClass('is-active')
  })
})
