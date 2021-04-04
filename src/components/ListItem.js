import React from 'react'
import { useDispatch } from 'react-redux'
import { addFavorite, removeFavorite } from '../containers/favorite/slice'
import Tag from './Tag'
import Item from './styles/ListItemStyle'

const ListItem = ({ item, favorite }) => {
  const dispatch = useDispatch()

  const handleClickAdd = (item) => {
    dispatch(addFavorite(item))
  }

  const handleClickRemove = (id) => {
    dispatch(removeFavorite(id))
  }

  return (
    <Item>
      <h1 className="title">{item.title}</h1>
      <span className="author">{item.author_name}</span>
      {item.categories.map((category) => {
        return <Tag category={category} key={category} />
      })}
      {favorite ? (
        <React.Fragment>
          <button className="btn btn-saved">Saved</button>
          <button
            className="btn btn-remove"
            onClick={() => handleClickRemove(item.id)}
          >
            Unsave
          </button>
        </React.Fragment>
      ) : (
        <button className="btn btn-add" onClick={() => handleClickAdd(item)}>
          Save
        </button>
      )}
    </Item>
  )
}

export default ListItem
