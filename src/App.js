import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './navbar'
import Selector from './selector'
import Chart from './chart'
import Landing from './landing'
import Login from './login'
import FoodJournal from './foodjournal'
import FoodDayChart from './fooddaychart'

class App extends React.Component {
  
  state = {
    loggedIn:true,
    currentUser:'',
    days:[]
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
    fetch('http://localhost:3000/api/v1/food_days')
    .then(resp => resp.json())
    .then(days => {
      this.setState({days:days})
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
      <Route path='/fooddaychart'>
        <FoodDayChart user={this.state.currentUser} days={this.state.days} />
      </Route>
    </Switch>
</div>
)}

}
export default App;