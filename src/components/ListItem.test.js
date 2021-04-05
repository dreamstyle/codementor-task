import React from 'react'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import store from '../app/store'
import ListItem from './ListItem'

const favorite = true
const item = {
  id: 24273,
  title: 'React Pro? Just Starting Out?',
  author_name: 'Kyle Salter',
  categories: ['React', 'Front end development', 'Teaching'],
}

const setup = () => {
  const utils = render(
    <Provider store={store}>
      <ListItem key={item.id} item={item} favorite={favorite} />
    </Provider>
  )
  return {
    ...utils,
  }
}

describe('<ListItem />', () => {
  it('should render a li', () => {
    const { getByTestId } = setup()
    expect(getByTestId('list-item')).toBeInTheDocument()
  })

  it('should render the title, author, category correctly', () => {
    const { getByText, getAllByTestId } = setup()
    expect(getByText('React Pro? Just Starting Out?')).toBeVisible()
    expect(getByText('Kyle Salter')).toBeVisible()
    expect(getByText('React')).toBeVisible()
    expect(getByText('Front end development')).toBeVisible()
    expect(getByText('Teaching')).toBeVisible()
    expect(getAllByTestId('tag').length).toBe(item.categories.length)
  })

  it('should render saved and unsave button while favorite is true', () => {
    const { getByText } = setup()
    expect(getByText('Saved')).toBeInTheDocument()
    expect(getByText('Saved')).toBeVisible()
    expect(getByText('Unsave')).toBeInTheDocument()
  })

  it('should render save button while favorite is false', () => {
    const { getByText } = render(
      <Provider store={store}>
        <ListItem key={item.id} item={item} favorite={false} />
      </Provider>
    )
    expect(getByText('Save')).toBeInTheDocument()
  })

  it('should add item to favorite list', () => {
    const { getByText } = render(
      <Provider store={store}>
        <ListItem key={item.id} item={item} favorite={false} />
      </Provider>
    )

    expect(store.getState().favorite.list.length).toBe(0)
    userEvent.click(getByText('Save'))
    expect(store.getState().favorite.list.length).toBe(1)
  })

  it('should remove item from favorite list', () => {
    const { getByText } = setup()
    expect(store.getState().favorite.list.length).toBe(1)
    userEvent.click(getByText('Unsave'))
    expect(store.getState().favorite.list.length).toBe(0)
  })
})
