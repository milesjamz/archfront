import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './navbar'
import Selector from './selector'
import Chart from './chart'
import Landing from './landing'
import Login from './login'

class App extends React.Component {
  
  state = {
    loggedIn:true,
    currentUser:'Miles'
  }

  logOut = () => {
    this.setState({ currentUser:'', loggedIn:false })
  }
  
  render() {

  return (
    <div className="App">
    <NavBar user={this.state.currentUser} loggedIn={this.state.loggedIn} logOut={this.logOut} />
    <Switch>
      <Route exact path='/'>
        <Landing user={this.state.currentUser} />
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
)}

}
export default App;