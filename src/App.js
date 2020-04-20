import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './navbar'
import Selector from './selector'
import Chart from './chart'
import Landing from './landing'
import Login from './login'

function App() {
  return (
    <div className="App">
    <NavBar />
    <Switch>
      <Route exact path='/'>
        <Landing />
      </Route>
      <Route path='/entry'>
        <Selector />
      </Route>
      <Route path='/userchart'>
        <Chart />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
    </Switch>
</div>
)
}

export default App;