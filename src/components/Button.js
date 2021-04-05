import React from 'react'
import StyledButton from './styles/ButtonStyle'

const Button = ({ parentClass, type, size, text, handleClick }) => {
  const className = () => {
    let name = ''
    if (type) name += `btn-${type} `
    if (size) name += `btn-${size} `
    if (parentClass) name += parentClass
    return name
  }

  return (
    <StyledButton
      data-testid="btn"
      className={className()}
      onClick={handleClick}
    >
      {text}
    </StyledButton>
  )
}

export default Button
