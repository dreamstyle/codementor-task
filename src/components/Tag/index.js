import React from 'react'
import Root from './style'

const Tag = ({ category }) => {
  return <Root data-testid="tag">{category}</Root>
}

export default Tag
