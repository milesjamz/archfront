import React from 'react'

class Chart extends React.Component {

    state = {
        userData:[],
    }

componentDidMount() {
    fetch('http://localhost:3000/api/v1/users/1')
    .then(resp => resp.json())
    .then(parsedJayson => {
        console.log(parsedJayson);
        this.setState({userData: parsedJayson}) 
    })
}

render() {

const eachDay = day => {
    console.log(day)
    return (
        <div className="day" key={day.id}>
            <em>{day.the_date}</em>
            <p>{day.color}</p>
            <p>{day.summary}</p>
        </div>
    )
}

const showUserData = () => {
    const thisGuy = this.state.userData 
    let answers = {};
    let shitList = ['created_at','updated_at','user_id','id','the_date','color','summary']
    let eachLittleOne = thisGuy.days.map(oneDay => eachDay(oneDay))
    thisGuy.days.forEach(function(oneDay) {
    for (let [key, value] of Object.entries(oneDay) ) {
        shitList.includes(key) ? console.log('doesnt belong in list') : answers[key] ? answers[key] += value : answers[key] = value
    }
})
    // console.log(thisGuy.days, answers);
 let sortedData = Object.keys(answers).sort(function(a,b){return answers[a] - answers[b] } )
 let min = sortedData[0]; 
 let max = sortedData[19];
    return (
        <div className='eachPage'>
            <strong>Hello, {thisGuy.username}!</strong><br/><br/>
            You have {thisGuy.days.length} {thisGuy.days.length === 1 ? 'day' : 'days'} recorded.<br/><br/>
            <div className='dataContainer'>
            algos: {answers['algo']} total, { (Math.round(answers['algo'] / thisGuy.days.length * 2) / 2 )} per day average<br/>
            job applications: {answers['apps']} total, { Math.round(answers['apps'] / thisGuy.days.length * 2) / 2} per day average <br/>
            blogs: {answers['blog']} total, { Math.round(answers['blog'] / thisGuy.days.length * 2 )/ 2} per day average <br/>
            songs recorded: {answers['song_rec']} total, { Math.round(answers['song_rec'] / thisGuy.days.length * 2) / 2} per day average <br/>
            songs written: {answers['song_wrote']} total, { Math.round(answers['song_wrote'] / thisGuy.days.length * 2 ) / 2} per day average <br/>
            journal entries: {answers['journal']} total, { Math.round(answers['journal'] / thisGuy.days.length * 2 )/ 2} per day average <br/>
            personal letters: {answers['letters']} total, { Math.round(answers['letters'] / thisGuy.days.length * 2 )/ 2} per day average<br/>
            calls to family: {answers['calls']} total, { Math.round(answers['calls'] / thisGuy.days.length) * 2 / 2} per day average<br/>
            front plank minutes: {answers['front_p']} total, { Math.round(answers['front_p'] / thisGuy.days.length * 2 )/ 2} per day average<br/>
            side plank minutes: {answers['side_p']} total, {Math.round(answers['side_p'] / thisGuy.days.length * 2 / 2)} per day average<br/>
            rear plank minutes: {answers['rear_p']} total, {Math.round(answers['rear_p'] / thisGuy.days.length * 2 / 2)} per day average<br/>
            curls: {answers['curls']} total, {Math.round(answers['curls'] / thisGuy.days.length * 2 )/ 2} per day average<br/>
            burpees: {answers['burpee']} total, {Math.round(answers['burpee'] / thisGuy.days.length * 2 )/ 2} per day average<br/>
            push ups: {answers['push_u']} total, {Math.round(answers['push_u'] / thisGuy.days.length * 2 )/ 2} per day average<br/>
            chin ups: {answers['chin_u']} total, {Math.round(answers['chin_u'] / thisGuy.days.length * 2 )/ 2} per day average<br/>
            lunges: {answers['lunges']} total, {Math.round(answers['lunges'] / thisGuy.days.length * 2 )/ 2} per day average<br/>
            lateral raises: {answers['lat_raise']} total, {Math.round(answers['lat_raise'] / thisGuy.days.length * 2 )/ 2} per day average<br/>
            front raises: {answers['front_raise']} total, {Math.round(answers['front_raise'] / thisGuy.days.length * 2 )/ 2} per day average<br/>
            overhead press: {answers['ohp']} total, {Math.round(answers['ohp'] / thisGuy.days.length * 2 )/ 2} per day average<br/>
            daily mood: {answers['mood']} total, {Math.round(answers['mood'] / thisGuy.days.length * 2 )/ 2} average <br/>
            </div>
            The thing you've done the most is {max}, least is {min}. 
            <div className="dayContainer">
            {eachLittleOne}
            </div>
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