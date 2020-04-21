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
    thisGuy.days.forEach(function(oneDay) {
    for (let [key, value] of Object.entries(oneDay) ) {
        shitList.includes(key) ? console.log('doesnt belong in list') : answers[key] ? answers[key] += value : answers[key] = value
    }
})
    console.log(thisGuy.days, answers)

    return (
        <div>
            Hello, {thisGuy.username}!<br/><br/>
            You have {thisGuy.days.length} {thisGuy.days.length === 1 ? 'day' : 'days'} recorded.<br/><br/>
            algos: {answers['algo']} total, {(answers['algo'] / thisGuy.days.length)} per day average<br/>
            job applications: {answers['apps']} total, {(answers['apps'] / thisGuy.days.length)} per day average <br/>
            blogs: {answers['blog']} total, {(answers['blog'] / thisGuy.days.length)} per day average <br/>
            songs recorded: {answers['song_rec']} total, {(answers['song_rec'] / thisGuy.days.length)} per day average <br/>
            songs written: {answers['song_wrote']} total, {(answers['song_wrote'] / thisGuy.days.length)} per day average <br/>
            journal entries: {answers['journal']} total, {(answers['journal'] / thisGuy.days.length)} per day average <br/>
            personal letters: {answers['letters']} total, {(answers['letters'] / thisGuy.days.length)} per day average<br/>
            calls to family: {answers['calls']} total, {(answers['calls'] / thisGuy.days.length)} per day average<br/>
            front plank minutes: {answers['front_p']} total, {(answers['front_p'] / thisGuy.days.length)} per day average<br/>
            side plank minutes: {answers['side_p']} total, {(answers['side_p'] / thisGuy.days.length)} per day average<br/>
            rear plank minutes: {answers['rear_p']} total, {(answers['rear_p'] / thisGuy.days.length)} per day average<br/>
            curls: {answers['curls']} total, {(answers['curls'] / thisGuy.days.length)} per day average<br/>
            burpees: {answers['burpee']} total, {(answers['burpee'] / thisGuy.days.length)} per day average<br/>
            push ups: {answers['push_u']} total, {(answers['push_u'] / thisGuy.days.length)} per day average<br/>
            chin ups: {answers['chin_u']} total, {(answers['chin_u'] / thisGuy.days.length)} per day average<br/>
            lunges: {answers['lunges']} total, {(answers['lunges'] / thisGuy.days.length)} per day average<br/>
            lateral raises: {answers['lat_raise']} total, {(answers['lat_raise'] / thisGuy.days.length)} per day average<br/>
            front raises: {answers['front_raise']} total, {(answers['front_raise'] / thisGuy.days.length)} per day average<br/>
            overhead press: {answers['ohp']} total, {(answers['ohp'] / thisGuy.days.length)} per day average<br/>
            daily mood: {answers['mood']} total, {(answers['mood'] / thisGuy.days.length)} average <br/>
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