import React from 'react';

class Selector extends React.Component {

state = {
	dropDown: ''
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

  return (
    <div className="selector">
Hello, USERNAME - today is {today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()}.<br/>
What did you do today?
<form>
algorithms:<br/>
job applications:<br/>
blogs:<br/>
songs:<br/>
journal pages:<br/>
personal letters:<br/>
calls to family:<br/>
front plank minutes:<br/>
side plank minutes:<br/>
rear plank minutes:<br/>
curls:<br/>
burpees:<br/>
push-ups:<br/>
chin-ups:<br/>

</form>

</div>
	)}
}
export default Selector;