import React from 'react'
import { useDispatch } from 'react-redux'
import { addFavorite, removeFavorite } from '../../containers/Favorite/slice'
import Tag from '../Tag'
import Button from '../Button'
import Item from './style'

const ListItem = ({ item, favorite }) => {
  const dispatch = useDispatch()

  const handleClickAdd = (item) => {
    dispatch(addFavorite(item))
  }

  const handleClickRemove = (id) => {
    dispatch(removeFavorite(id))
  }

  return (
    <Item data-testid="list-item">
      <h1 className="title">{item.title}</h1>
      <span className="author">{item.author_name}</span>
      {item.categories.map((category) => {
        return <Tag category={category} key={category} />
      })}
      {favorite ? (
        <React.Fragment>
          <Button parentClass="btn" type="text" text="Saved" />
          <Button
            parentClass="btn btn-remove"
            type="primary"
            size="lg"
            text="Unsave"
            handleClick={() => handleClickRemove(item.id)}
          />
        </React.Fragment>
      ) : (
        <Button
          parentClass="btn btn-add"
          type="primary"
          size="lg"
          text="Save"
          handleClick={() => handleClickAdd(item)}
        />
      )}
    </Item>
  )
}

export default ListItem
