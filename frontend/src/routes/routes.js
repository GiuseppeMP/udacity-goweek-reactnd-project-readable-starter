import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Home } from 'views'

const Routes = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/home' component={Home} />
        <Redirect from='*' to='/home' />
      </Switch>
    </BrowserRouter>
  )
}
export default Routes
