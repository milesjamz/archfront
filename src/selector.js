import React from 'react';

class Selector extends React.Component {

state = {
	algos:'',
	jobs:'',
	blogs:'',
	songWrote:'',
	songRecorded:'',
	journalPages:'',
	letters:'',
	famCalls:'',
	frontPlank:'',
	sidePlank:'',
	rearPlank:'',
	burpees:'',
	pushUps:'',
	curls:'',
	chinUps:'',
	lateral:'',
	front:'',
	ohp:''
}


handleOnChange = (e) => {
	console.log('im gay')
	this.setState({ [e.target.name]: e.target.value })
  }
  
onSubmit = (e) => {
	e.preventDefault()
	alert(this.state.ohp)
}

render() {

const today = new Date()

const littleGuy = (formType) => {
return <input name={formType} type='number' min="0" style={{ width: "45px" }} value={this.state.formType} onChange={this.handleOnChange}/>
}
  return (
    <div className="selector">
Hello, USERNAME - today is {today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()}.<br/>
What did you do today?<br/><br/>
<form onSubmit={this.onSubmit} >
--- job search ---<br/><br/>
algorithms completed:{littleGuy('algos')}<br/>
job applications:{littleGuy('jobs')}<br/>
blogs:{littleGuy('blogs')}<br/><br/>
--- musical ---<br/><br/>
songs recorded:{littleGuy('songWrote')}<br/>
songs written:{littleGuy('songRecorded')}<br/>
journal pages:{littleGuy('journalPages')}<br/>
personal letters:{littleGuy('letters')}<br/>
calls to family:{littleGuy('famCalls')}<br/><br/>
--- physical --- <br/><br/>
<div className="core">
front plank minutes:{littleGuy('frontPlank')}<br/>
side plank minutes:{littleGuy('sidePlank')}<br/>

burpees:{littleGuy('burpees')}<br/>
</div>
<div className="chest">
push-ups:{littleGuy('pushUps')}<br/>
</div>
<div className="arms">
curls:{littleGuy('curls')}<br/>
</div>
<div className="back">
rear plank minutes:{littleGuy('rearPlank')}<br/>
chin-ups:{littleGuy('chinUps')}<br/>
</div>
<div className="shoulders">
lateral raises:{littleGuy('lateral')}<br/>
front raises:{littleGuy('front')}<br/>
overhead press:{littleGuy('ohp')}<br/>	
</div>
<br/><br/><br/><br/><br/>
<input type="submit" value="Submit this day's damn activity"/>
</form>

</div>
	)}
}
export default Selector;