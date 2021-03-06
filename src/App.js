import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Search from './containers/Search'
import Favorite from './containers/Favorite'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route path="/search" component={Search} />
        <Route path="/favorite" component={Favorite} />
      </Switch>
    </div>
  )
}

export default App
