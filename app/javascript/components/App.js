import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Brands from './Brands/Brands'
import Brand from './Brand/Brand'

const App = () => {
  return (
  <Switch>
      <Route exact path="/" component={Brands}/>
      <Route exact path="/brands/:slug" component={Brand}/>
  </Switch>
  )
}

export default App
