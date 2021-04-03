import React from 'react'
import ListItem from '../../components/ListItem'
import Root from './style'

const Search = () => {
  const list = [
    {
      id: 1753,
      title: 'Why React.js Trumps Angular 2 (and 1)',
      author_name: 'Tendai Mutunhire',
      categories: ['reactjs', 'AngularJS', 'angular2'],
    },
    {
      id: 794,
      title: 'Building a Mailbox Editor using ReactJS and Bootstrap',
      author_name: 'gdangelo',
      categories: ['reactjs', 'JavaScript', 'bootstrap', 'jsx'],
    },
    {
      id: 1712,
      title: 'Use React-Router with Ease',
      author_name: 'Kayode Adeniyi',
      categories: ['reactjs', 'react-router', 'JavaScript'],
    },
  ]

  return (
    <Root>
      <input
        className="input-search"
        type="text"
        placeholder="Please enter the keyword"
      />
      <ul>
        {list.length > 0 ? (
          list.map((item) => <ListItem item={item} key={item.id} />)
        ) : (
          <p>No result</p>
        )}
      </ul>
    </Root>
  )
}

export default Search
