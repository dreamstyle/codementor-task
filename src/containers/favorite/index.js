import React from 'react'
import ListItem from '../../components/ListItem'

const Favorite = () => {
  const list = [
    {
      id: 1753,
      title: 'Why React.js Trumps Angular 2 (and 1)',
      author_name: 'Tendai Mutunhire',
      categories: ['reactjs', 'AngularJS', 'angular2'],
    },
  ]
  return (
    <main>
      <ul>
        {list.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </ul>
    </main>
  )
}

export default Favorite
