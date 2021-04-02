import React from 'react'
import Tag from './Tag'
import Item from './styles/ListItemStyle'

const ListItem = ({ item }) => {
  return (
    <Item>
      <h1 className="title">{item.title}</h1>
      <span className="author">{item.author_name}</span>
      {item.categories.map((category) => {
        return <Tag category={category} key={category} />
      })}
    </Item>
  )
}

export default ListItem
