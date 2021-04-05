import styled from 'styled-components'

const StyledButton = styled.button`
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 2px;

  &.btn-primary {
    background-color: #fff;
    color: #000;
  }

  &.btn-text {
    background-color: #ccc;
    color: #fff;
  }

  &.btn-lg {
    font-size: 14px;
  }
`

export default StyledButton
