import React from 'react';

class Selector extends React.Component {

state = {
	algo:'0',
	apps:'0',
	blog:'0',
	song_wrote:'0',
	song_rec:'0',
	journal:'0',
	letters:'0',
	calls:'0',
	front_p:'0',
	side_p:'0',
	rear_p:'0',
	burpee:'0',
	push_u:'0',
	lunges:'0',
	curls:'0',
	chin_u:'0',
	lat_raise:'0',
	front_raise:'0',
	ohp:'0',
	the_date:'',
	color:'blue',
	summary:"Today was a great day, can't wait until tomorrow!",
	mood:'5',
	user_id:'1',
	username:''
}


handleOnChange = (e) => {
	console.log('im gay')
	this.setState({ [e.target.name]: e.target.value })
  }
  
onSubmit = (e) => {
	e.preventDefault()
		let daKeys = Object.keys(this.state);
		let daValues = Object.values(this.state)
		let newDay = {};
		let nonIntegers = ["color", "summary", "the_date"]
		daKeys.map((el, i) => {
			if (nonIntegers.includes(el)) {
			newDay[el] = daValues[i]
		} else {
			newDay[el] = parseInt(daValues[i], 10)
		}
	})
		// console.log(newDay.valueOf(), newDay)
			fetch('http://localhost:3000/api/v1/days', {
			 method: "POST",
			  headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			  },
			  body: JSON.stringify({day: newDay})
			})
			  .then(res => res.json())
			  .then(newDay => console.log(newDay) )
			alert('Thank you for submitting your data!')
			this.resetMyState();
}


componentDidMount() {
	fetch(`http://localhost:3000/api/v1/users/${this.state.user_id}`)
		.then(resp => resp.json())
		.then(user => this.setState({ username: user.username }))
	// this.setState({ })
	const today = new Date().toDateString().split(' ')
	this.setState({ the_date: (today[0] + ', ' + today[2] + ' ' + today[1] + ' ' + today[3]) })
}

initialState = {
	algo:'0',
	apps:'0',
	blog:'0',
	song_wrote:'0',
	song_rec:'0',
	journal:'0',
	letters:'0',
	calls:'0',
	front_p:'0',
	side_p:'0',
	rear_p:'0',
	burpee:'0',
	push_u:'0',
	lunges:'0',
	curls:'0',
	chin_u:'0',
	lat_raise:'0',
	front_raise:'0',
	ohp:'0',
	the_date:'',
	color:'blue',
	summary:"Today was a great day, can't wait until tomorrow!",
	mood:'5',
	user_id:'1',
	username:''
}

resetMyState = () => {
	this.setState({
		algo:'0',
		apps:'0',
		blog:'0',
		song_wrote:'0',
		song_rec:'0',
		journal:'0',
		letters:'0',
		calls:'0',
		front_p:'0',
		side_p:'0',
		rear_p:'0',
		burpee:'0',
		push_u:'0',
		lunges:'0',
		curls:'0',
		chin_u:'0',
		lat_raise:'0',
		front_raise:'0',
		ohp:'0',
		color:'blue',
		summary:"Today was a great day, can't wait until tomorrow!",
		mood:'5',
	})
}

render() {

const today = new Date().toDateString().split(' ')

const littleGuy = (formType) => {
	let theValue = eval(`this.state.${formType}`);
return <span><input name={formType} type='number' min="0" style={{ width: "45px" }} value={theValue} onChange={this.handleOnChange} required/> </span>
}
  return (
    <div className="selector">
Hello, {this.state.username ? this.state.username : 'you' } - today is {today[0] + ', ' + today[2] + ' ' + today[1] + ' ' + today[3]}.<br/>
What did you do today?<br/><br/>
<form onSubmit={this.onSubmit} >
--- job search ---<br/><br/>
algorithms completed:{littleGuy('algo')}<br/>
job applications:{littleGuy('apps')}<br/>
blogs:{littleGuy('blog')}<br/><br/>
--- musical ---<br/><br/>
songs recorded:{littleGuy('song_wrote')}<br/>
songs written:{littleGuy('song_rec')}<br/>
journal pages:{littleGuy('journal')}<br/>
personal letters:{littleGuy('letters')}<br/>
calls to family:{littleGuy('calls')}<br/><br/>
--- physical --- <br/><br/>
<div className="core">
front plank minutes:{littleGuy('front_p')}<br/>
side plank minutes:{littleGuy('side_p')}<br/>

burpees:{littleGuy('burpee')}<br/>
</div>
<div className="chest">
push-ups:{littleGuy('push_u')}<br/>
</div>
<div className="arms">
curls:{littleGuy('curls')}<br/>
</div>
<div className="back">
rear plank minutes:{littleGuy('rear_p')}<br/>
chin-ups:{littleGuy('chin_u')}<br/>
</div>
<div className="shoulders">
lateral raises:{littleGuy('lat_raise')}<br/>
front raises:{littleGuy('front_raise')}<br/>
overhead press:{littleGuy('ohp')}<br/>	
</div>
<div className="legs">
lunges:{littleGuy('lunges')}<br/>	
</div>
<br/>
--- personal --- <br/><br/>
mood:<input name="mood" type='number' min="1" max="10" style={{ width: "45px" }} value={this.state.mood} onChange={this.handleOnChange} required/><br/>
today's color:<input type='text' name="color" value={this.state.color} onChange={this.handleOnChange}/><br/>
summary:<textarea style={{ height: "50px", width: "300px" }} name="summary" value={this.state.summary} onChange={this.handleOnChange} />
<br/><br/><br/><br/><br/>
<input type="submit" value="Submit this day's damn activity"/>
</form>

</div>
	)}
}
export default Selector;