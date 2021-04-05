import React from 'react'
import { Provider } from 'react-redux'
import { render, fireEvent } from '@testing-library/react'
import store from '../../app/store'
import Search from './index'

const setup = () => {
  const utils = render(
    <Provider store={store}>
      <Search />
    </Provider>
  )
  const input = utils.getByTestId('input-search')
  return {
    input,
    ...utils,
  }
}

describe('<Search />', () => {
  it('search and can not get matched result', async () => {
    const { input, findByTestId } = setup()
    global.onchange = jest.fn()

    fireEvent.change(input, {
      target: { value: 'this_is_supposed_to_fail_getting__matched_result' },
    })

    expect(onchange).toHaveBeenCalledTimes(1)
    expect(await findByTestId('no-result')).toBeVisible()
  })

  it('search and get matched result', async () => {
    const { input, findByTestId } = setup()
    global.onchange = jest.fn()

    fireEvent.change(input, { target: { value: 'react' } })

    expect(onchange).toHaveBeenCalledTimes(1)
    expect(await findByTestId('ul')).toBeVisible()
  })
})
