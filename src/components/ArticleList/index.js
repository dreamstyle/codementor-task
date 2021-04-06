import React from 'react'
import { useSelector } from 'react-redux'
import { selectList } from '../../containers/Favorite/slice'
import ListItem from '../ListItem'

const ArticleList = ({ list }) => {
  const favoriteList = useSelector(selectList)

  return (
    <ul data-testid="ul">
      {list.map((item) => (
        <ListItem
          item={item}
          favorite={favoriteList.some((el) => el.id === item.id)}
          key={item.id}
        />
      ))}
    </ul>
  )
}

export default ArticleList
