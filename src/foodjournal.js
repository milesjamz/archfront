import React from 'react'

class FoodJournal extends React.Component {

    state = {
        allergens: [],
        name:'',
        quantity:5,
        speed:5,
        calories:0,
        symptomName:'',
        symptomSummary:'',
        symptomLength:"",
        symptomSeverity:"",
        coffee:0,
        alcohol:0,
        daySummary:'',
        the_date:'',
        food_day_id:''
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
        const properDate = today[0] + ', ' + today[2] + ' ' + today[1] + ' ' + today[3]
        console.log(properDate)
        this.setState({ the_date: (today[0] + ', ' + today[2] + ' ' + today[1] + ' ' + today[3]) })

        fetch(`${this.API}food_days`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            this.setState({food_day_id: data[0].id})
            })
        const myFoodDay = {
            the_date:properDate,
            user_id:1,
            summary:''
        }
        console.log(myFoodDay)
        fetch(`${this.API}food_days`, {
                method: "POST",
                 headers: {
                   "Content-Type": "application/json",
                   "Accept": "application/json"
                 },
                 body: JSON.stringify({food_day: myFoodDay})
               })
                 .then(res => res.json())
                 .then(newDay => {
                     console.log(newDay)
                    })
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
        console.log(e.target.id)
        if (e.target.id === 'meal') {
            console.log('im not gay')
            const theAllergens = this.state.allergens.map(allergen => allergen.name);
            const stateForms = ['name','quantity','speed','calories','food_day_id'];
            const allOfEm = theAllergens.concat(stateForms);
            // finds all the dynamic allergens in my state and saves as object
            let listOfMealAllergens = {};
            this.state.allergens.map(allergen => {
                console.log('hello buddy', allergen.name)
                listOfMealAllergens[allergen.name] = this.state[allergen.name]
            })
            const mealAllergenz = []
            for (const allergenz in listOfMealAllergens) {
                listOfMealAllergens[allergenz] === true ? mealAllergenz.push(allergenz) : console.log(`${allergenz} was false`)
            }
            console.log(listOfMealAllergens, mealAllergenz)
            // const derState = Object.keys(this.state)
            // const nonApp = derState.filter(oneThing => !allOfEm.includes(oneThing))
            let mealEntry = {};
            stateForms.map(oneThing => {
                console.log(oneThing, this.state[oneThing])
                mealEntry[oneThing] = this.state[oneThing]
                }
            )
            fetch('http://localhost:3000/api/v1/meals', {
                method: "POST",
                 headers: {
                   "Content-Type": "application/json",
                   "Accept": "application/json"
                 },
                 body: JSON.stringify({meal: mealEntry})
               })
                 .then(res => res.json())
                 .then(newDay => console.log(mealEntry) )
               alert('Thank you for submitting your data!')
            //    this.resetMyState();
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
const addInput = (formName, type, params) => {
    // adds an input to form, using dynamic ability to creat text or number fields
    if (type === 'number') {
        if (params === 'oneTen') {
            return <span> <input name={formName} id ={formName} type={type} value={this.state.type} onChange={this.handleOnChange} min='0' max='10' required/> </span>
        } else {
            return <span> <input name={formName} id ={formName} type={type} value={this.state.type} onChange={this.handleOnChange} min='0' required/> </span>
        }
    } else {
    return <span> <input name={formName} id ={formName} type={type} value={this.state.type} onChange={this.handleOnChange} required/> </span>
    }
}
    return (
        <div className='eachPage'>
        Today is {this.state.the_date}.<br/>
        <form className='selectorForm' name='meal' id='meal' onSubmit={this.onSubmit}>
        M E A L - = - F O R M<br/>
        Thing to select previous meal types, hehe<br/>
        What did you eat?{addInput('name','text')}<br/>
        How big a meal was it?(1 to 10){addInput('quantity','number','oneTen')}<br/>
        How fast did you shovel it down?(1 to 10){addInput('speed','number','oneTen')}<br/>
        How many calories did it have?{addInput('calories','number')}<br/>
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