import React from 'react'
import { useSelector } from 'react-redux'
import { selectList } from './slice'
import ArticleList from '../../components/ArticleList'

const Favorite = () => {
  const list = useSelector(selectList)

  return (
    <main>
      <ArticleList list={list} />
    </main>
  )
}

export default Favorite
