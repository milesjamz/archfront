import React from 'react';

class Selector extends React.Component {

state = {
	dropDown: '',
	fuck: ''
}

// handleOnChange = e => {
// 	this.setState({dropDown: e.target.value})
// }

// onSubmit = () => {
// 	alert(this.state.dropDown)
// }

// --- below is a dropdown form to be reinserted into render ---
/* <form onSubmit={this.onSubmit}>
<label>
	Pick a Prime Project, Please:
	<input
		type='text'
		value={this.state.dropDown}
		onChange={this.handleOnChange}
	/>
</label>
</form>  */
// --- form ends here ---

render() {

const today = new Date()

const littleGuy = (formType) => {
return <input type='number' style={{ width: "45px" }} value={this.state.formType} onChange={this.handleOnChange}/>
}
  return (
    <div className="selector">
Hello, USERNAME - today is {today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()}.<br/>
What did you do today?<br/><br/>
<form>
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
front plank minutes:{littleGuy('frontPlank')}<br/>
side plank minutes:{littleGuy('sidePlank')}<br/>
rear plank minutes:{littleGuy('rearPlank')}<br/>
curls:{littleGuy('curls')}<br/>
burpees:{littleGuy('burpees')}<br/>
push-ups:{littleGuy('pushUps')}<br/>
chin-ups:{littleGuy('chinUps')}<br/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<input type="submit" value="Submit this day's damn activity"/>
</form>

</div>
	)}
}
export default Selector;