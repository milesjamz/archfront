import React from 'react'

class Login extends React.Component {

state = {
    username:'',
    password:''
}

handleOnChange = e => {
    console.log(e.target.name, e.target.value)
    this.setState({ [e.target.name]: e.target.value })
}

handleOnSubmit = e => {
    e.preventDefault()
    console.log(e.target)
}

render() {
    return (
        <div>
            Login heah<br />
            <form onSubmit={this.handleOnSubmit}>
            <label>Username:</label>
            <input type='text' name="username" value={this.state.form} onChange={this.handleOnChange}/><br/>
            <label>Password:</label>
            <input type='text' name="password" value={this.state.form} onChange={this.handleOnChange}/><br/>
            <input type="submit" value="Submit this sheit"/>
            </form>
        </div>
    )
}

}
export default Login