import styled from 'styled-components'

const Item = styled.li`
  position: relative;
  margin: 0;
  padding: 16px 60px 16px 0;
  border-bottom: 1px solid #eee;
  color: #666;

  &:last-of-type {
    border-bottom: none;
  }

  &:hover {
    .btn-add {
      display: block;
    }

    .btn-remove {
      display: block;
    }
  }

  .title {
    margin: 4px 0;
    font-size: 20px;
    font-weight: 600;
  }

  .author {
    margin-right: 24px;
    font-size: 13px;
  }

  .category {
    display: inline-block;
    margin-right: 4px;
    padding: 2px 4px;
    border-radius: 4px;
    background-color: #eee;
    font-size: 13px;
    font-weight: 500;
  }

  .btn {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    padding: 4px 8px;
    border-radius: 2px;
  }

  .btn-add {
    display: none;
    border: 1px solid #ccc;
    background-color: #fff;
  }

  .btn-saved {
    border: none;
    background-color: #ccc;
    color: #fff;
  }

  .btn-remove {
    display: none;
    border: 1px solid #ccc;
    background-color: #fff;
    color: #000;
    font-size: 14px;
  }
`

export default Item
