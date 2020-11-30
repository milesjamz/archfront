import React from 'react'

class FoodJournal extends React.Component {

    state = {
        allergens: [],
        mealName:'',
        mealSize:5,
        mealSpeed:5,
        mealCals:0,
        symptomName:'',
        symptomSummary:'',
        symptomLength:"",
        symptomSeverity:"",
        coffee:0,
        alcohol:0,
        daySummary:''
    }

    API = 'http://localhost:3000/api/v1/'

    componentDidMount() {
        fetch(`${this.API}allergens`)
        .then(resp => resp.json())
        .then(data => {
            this.setState({allergens: data})
            this.addBoxValues()
        })
        const today = new Date().toDateString().split(' ')
        this.setState({ the_date: (today[0] + ', ' + today[2] + ' ' + today[1] + ' ' + today[3]) })
    }

    addBoxValues() {
        this.state.allergens.map(allergen => {
            this.setState({[allergen.name]: false})
        })
    }

    handleOnChange = (e) => {
        console.log(e.target.id, e.target.value, e.target.type)
        if (e.target.type === 'checkbox')  {
            this.setState({[e.target.id]: e.target.checked })
        } else {
        this.setState({ [e.target.name]: e.target.value })
        }
    }

    onSubmit = (e) => {
        e.preventDefault()
        // console.log(e.target)
        if (e.target.name === 'meal') {
            const theAllergens = this.state.allergens.map(allergen => allergen.name);
            const stateForms = ['mealName','mealSize','mealSpeed','mealCals'];
            const allOfEm = theAllergens.concat(stateForms);
            const derState = Object.keys(this.state)
            const nonApp = derState.filter(oneThing => !allOfEm.includes(oneThing))
            console.log(nonApp)
            // console.log(daState.filter(oneThing => allOfEm.includes(oneThing)))
            // const myMeal = {}
            }
    }

render() {
    // console.log(Object.keys(this.state) )

    // console.log(this.state.allergens.map(allergen => allergen.name))

const allergenBox = (allergen) => {
    // adds allergen checkboxes dynamically
    // const myName = allergen.name
    return (
        <div key={allergen.id}>
            <label>{allergen.name}</label>
            <input type='checkbox' 
                key={allergen.id} 
                id={allergen.name} 
                // checked={this.state.myName} 
                onChange={this.handleOnChange} />  
        </div>
    )
}

const addAllergens = () => {
    if (this.state.allergens) {
         return this.state.allergens.map(allergen => allergenBox(allergen) )
            }
    }
const addInput = (name, type, params) => {
    // adds an input to form, using dynamic ability to creat text or number fields
    if (type === 'number') {
        if (params === 'oneTen') {
            return <span> <input name={name} id ={name} type={type} value={this.state.type} onChange={this.handleOnChange} min='0' max='10' required/> </span>
        } else {
            return <span> <input name={name} id ={name} type={type} value={this.state.type} onChange={this.handleOnChange} min='0' required/> </span>
        }
    } else {
    return <span> <input name={name} id ={name} type={type} value={this.state.type} onChange={this.handleOnChange} required/> </span>
    }
}
    return (
        <div className='eachPage'>
        Today is {this.state.the_date}.<br/>
        <form className='selectorForm' name='meal' onSubmit={this.onSubmit}>
        M E A L - = - F O R M<br/>
        Thing to select previous meal types, hehe<br/>
        What did you eat?{addInput('mealName','text')}<br/>
        How big a meal was it?(1 to 10){addInput('mealSize','number','oneTen')}<br/>
        How fast did you shovel it down?(1 to 10){addInput('mealSpeed','number','oneTen')}<br/>
        How many calories did it have?{addInput('mealCals','number')}<br/>
        What kind of allergens did it have?<br/>
        {addAllergens()}
        <input type='submit' value='push me'/>
        </form>
        <form className='selectorForm' name='symptoms' onSubmit={this.onSubmit}>
        S Y M P T O M - = - F O R M<br/>
        Thing to select previous symptom types, hehe<br/>
        What's wrong?{addInput('symptomName','text')}<br/>
        Care to be more specific?{addInput('symptomSummary','text')}<br/>
        How long did it last(minutes)?{addInput('symptomLength','number')}<br/>
        How severe was it(1 to 10)?{addInput('symptomSeverity','number')}<br/>
        <input type='submit' value='push me'/>
        </form>
        <form className='selectorForm' name='summary' onSubmit={this.onSubmit}>
        D A Y - = - S U M M A R Y<br/>
        {this.props.user.username}, you've currently reported X meals, Y symptoms, Z coffees and A drinks.<br/>
        Care to summarize your day overall?<br/>
        {addInput('symptomName','text')}<br/>
        </form>
        <button onClick={() => alert('a nice lil pick me up, eh')}><span role='img' aria-label='Coffee Cup'>☕</span>a cup of joe<span role='img' aria-label='Coffee Cup'>☕</span></button><br/>
        <button onClick={() => alert('feelin tipsy')}><span role='img' aria-label='Coffee Cup'>🍺</span>a drink<span role='img' aria-label='Coffee Cup'>🍺 </span></button><br/><br/> 
        </div>
            )
    }
}

export default FoodJournal;