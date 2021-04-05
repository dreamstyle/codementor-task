import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import InputSearch from './InputSearch'

describe('<InputSearch />', () => {
  it('should render input', () => {
    const { getByTestId } = render(<InputSearch />)
    expect(getByTestId('input-search')).toBeInTheDocument()
  })

  it('should receive passed in keywords and able to be change', async () => {
    const handleChange = jest.fn()
    const { getByTestId } = render(
      <InputSearch initValue="foo" handleChange={handleChange} />
    )

    const input = getByTestId('input-search')
    expect(input).toHaveValue('foo')

    userEvent.type(input, 'bar')
    expect(input).toHaveValue('bar')
    expect(handleChange).toHaveBeenCalled()
  })
})
