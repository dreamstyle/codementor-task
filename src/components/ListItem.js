import React from 'react'
import Item from './styles/ListItemStyle'

const ListItem = ({ item }) => {
  return (
    <Item>
      <h1 className="title">{item.title}</h1>
      <span className="author">{item.author_name}</span>
      {item.categories.map((category) => {
        return (
          <span className="category" key={category}>
            {category}
          </span>
        )
      })}
    </Item>
  )
}

export default ListItem
