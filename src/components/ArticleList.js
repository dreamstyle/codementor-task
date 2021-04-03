import React from 'react'
import ListItem from './ListItem'

const ArticleList = ({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <ListItem item={item} key={item.id} />
      ))}
    </ul>
  )
}

export default ArticleList
