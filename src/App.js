import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import Divider from '@material-ui/core/Divider'
import Home from './components/Home'
import NotFound from './components/NotFound'

function App () {
  const [value, setValue] = React.useState('pace')

  function handleChangeNavIcon (itemSelected) {
    setValue(itemSelected)
  }
  return (
    <main>
      <NavBar selectedNavIcon={value} onChangeNavIcon={handleChangeNavIcon} />
      <Divider variant='middle' />
      <Switch>
        <Route
          exact
          path='/'
          render={props => <Home {...props} selectedNavIcon={value} />}
        />
        <Route path='/not-found' component={NotFound} />
        <Redirect to='/not-found' />
      </Switch>
    </main>
  )
}

export default App
