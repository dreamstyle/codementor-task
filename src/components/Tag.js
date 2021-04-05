import React from 'react'
import Root from './styles/TagStyle'

const Tag = ({ category }) => {
  return <Root data-testid="tag">{category}</Root>
}

export default Tag
