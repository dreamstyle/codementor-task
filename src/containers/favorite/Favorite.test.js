import React from 'react'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import store from '../../app/store'
import Favorite from './index'

const setup = () => {
  const utils = render(
    <Provider store={store}>
      <Favorite />
    </Provider>
  )
  return {
    ...utils,
  }
}

describe('<Search />', () => {
  it('should render article list', () => {
    const { getByTestId } = setup()
    expect(getByTestId('ul')).toBeInTheDocument()
  })
})
