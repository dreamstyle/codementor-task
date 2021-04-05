import React from 'react'
import Input from './styles/InputSearchStyle'

const InputSearch = ({ initValue, handleChange }) => {
  return (
    <Input
      data-testid="input-search"
      className="input-search"
      type="text"
      placeholder="Please enter the keyword"
      defaultValue={initValue}
      onChange={(e) => handleChange(e)}
    />
  )
}

export default InputSearch
