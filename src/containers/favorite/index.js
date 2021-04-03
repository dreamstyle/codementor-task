import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectList } from './slice'
import ListItem from '../../components/ListItem'

const Favorite = () => {
  const list = useSelector(selectList)

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
