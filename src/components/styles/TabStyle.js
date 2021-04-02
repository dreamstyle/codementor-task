import styled from 'styled-components'

const Nav = styled.nav`
  background-color: #efefef;
  padding-top: 24px;

  li {
    display: inline-block;
  }

  button {
    padding: 8px 16px;
    border: none;
    color: #acacac;
    font-size: 16px;

    &:hover {
      color: #999;
    }

    &.is-active {
      background-color: #fff;
      color: #666;
    }
  }
`

export default Nav
