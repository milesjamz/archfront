import React from 'react'

class Chart extends React.Component {

    state = {
        userData:[]
    }

componentDidMount() {
    fetch('http://localhost:3000/api/v1/users/1')
    .then(resp => resp.json())
    .then(parsedJayson => this.setState({userData: parsedJayson}) )
}

render() {

const showUserData = () => {
    const thisGuy = this.state.userData 
    let answers = {};
    let shitList = ['created_at','updated_at','user_id','id','the_date','color','summary']
    for (let [key, value] of Object.entries(thisGuy.days[0]) ) {
        shitList.includes(key) ? console.log('doesnt belong in list') : answers[key] = value
    }
    console.log(thisGuy.days, answers)
    console.log(answers)
    return (
        <div>
            Hello, {thisGuy.username}!<br/>
            You have {thisGuy.days.length} {thisGuy.days.length === 1 ? 'day' : 'days'} recorded.<br/>
            algos: {answers['algo']} <br/>
            job applications: {answers['apps']}  <br/>
            blogs: {answers['blog']}  <br/>
            songs recorded: {answers['song_rec']}  <br/>
            songs written: {answers['song_wrote ']}  <br/>
            journal entries: {answers['journal']}  <br/>
            personal letters: {answers['letters']} <br/>
            calls to family: {answers['calls']} <br/>
            front plank minutes: {answers['front_p']} <br/>
            side plank minutes: {answers['side_p']} <br/>
            rear plank minutes: {answers['rear_p']} <br/>
            curls: {answers['curls']} <br/>
            burpees: {answers['burpee']} <br/>
            push ups: {answers['push_u']} <br/>
            chin ups: {answers['chin_u']} <br/>
            lunges: {answers['lunges']} <br/>
            lateral raises: {answers['lat_raise']} <br/>
            front raises: {answers['front_raise']} <br/>
            overhead press: {answers['ohp']} <br/>
            daily mood: {answers['mood']}  <br/>
        </div>
        )
}

return (
    <div>
        {this.state.userData.days ? showUserData() : null }
    </div>
)

}
}
export default Chart;