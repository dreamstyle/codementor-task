import React from 'react'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import store from '../app/store'
import ArticleList from './ArticleList'

const setup = () => {
  const list = [
    {
      id: 24273,
      title: 'React Pro? Just Starting Out?',
      author_name: 'Kyle Salter',
      categories: ['React', 'Front end development', 'Teaching'],
    },
    {
      id: 1996,
      title: 'Do You Need Redux in Your App?',
      author_name: 'Sunny R Gupta',
      categories: ['JavaScript', 'reactjs', 'redux'],
    },
  ]
  const utils = render(
    <Provider store={store}>
      <ArticleList list={list} />
    </Provider>
  )

  return {
    ...utils,
  }
}

describe('<ArticleList />', () => {
  it('should render list item correctly', () => {
    const { getByTestId, getAllByTestId } = setup()
    expect(getByTestId('ul')).toBeInTheDocument()
    expect(getAllByTestId('list-item').length).toBe(2)
  })

  it('should show nothing when list is an empty array', () => {
    const list = []
    const { getByTestId, queryAllByTestId } = render(
      <Provider store={store}>
        <ArticleList list={list} />
      </Provider>
    )
    expect(getByTestId('ul')).toBeInTheDocument()
    expect(queryAllByTestId('list-item').length).toBe(0)
  })
})
