import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './navbar'
import Selector from './selector'
import Chart from './chart'
import Landing from './landing'
import Login from './login'
import FoodJournal from './foodjournal'

class App extends React.Component {
  
  state = {
    loggedIn:true,
    currentUser:''
  }

  logOut = () => {
    this.setState({ currentUser:'', loggedIn:false })
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/users/1')
    .then(resp => resp.json())
    .then(user => {
      this.setState({currentUser: user})
    })
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
      <Route path='/foodjournal'>
        <FoodJournal user={this.state.currentUser} />
      </Route>
    </Switch>
</div>
)}

}
export default App;