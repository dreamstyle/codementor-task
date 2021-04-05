import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'
import '@testing-library/jest-dom'

const setup = () => {
  const utils = render(<Button />)
  return {
    ...utils,
  }
}

describe('<Button />', () => {
  it('should render a button', () => {
    const { getByTestId } = setup()
    expect(getByTestId('btn')).toBeInTheDocument()
  })

  it('should show the text', () => {
    const { getByTestId } = render(<Button text="click me" />)
    expect(getByTestId('btn')).toHaveTextContent('click me')
  })

  it('should trigger click event when clicking the button', () => {
    const { getByTestId } = setup()
    global.onclick = jest.fn()

    userEvent.click(getByTestId('btn'))
    expect(onclick).toHaveBeenCalledTimes(1)

    userEvent.click(getByTestId('btn'))
    expect(onclick).toHaveBeenCalledTimes(2)
  })
})
