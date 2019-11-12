import React from 'react';

class Selector extends React.Component {

state = {
	dropDown: ''
}

render() {

	const handleOnChange = e => {
		this.setState({dropDown: e.target.value})
	}

	const onSubmit = () => {
		alert(this.state.dropDown)
	}

  return (
    <div className="Selector">
hello, this is my selecktah!
	<form onSubmit={this.onSubmit}>
		<label>
			Pick a Prime Project, Please:
			<input
				type='text'
				value={this.state.dropDown}
				onChange={this.handleOnChange}
			/>
		</label>
	</form>
</div>
	)}
}
export default Selector;