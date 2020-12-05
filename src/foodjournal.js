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
        caffiene:'Coffee And Almond Milk',
        alcohol:'Beer',
        daySummary:'',
        the_date:'',
        food_day:'',
        food_day_id:'',
        aQuantity:'',
        cQuantity:''
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
            // console.log(data)
            this.setState({food_day:data[0],
                            food_day_id: data[0].id})
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
        // console.log(e.target.id, e.target.value, e.target.type, e.target.name)
        // console.log(e.target)
        if (e.target.type === 'checkbox')  {
            this.setState({[e.target.id]: e.target.checked })
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }



    onSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.id, e.target)

        const makeAllergens = (mealId, allergenArray) => {
            // console.log('the input is ' + input)
            if (allergenArray) {
            allergenArray.forEach(oneAllergen => {
            const newMealAllergen = {
                meal_id:mealId,
                allergen_id:oneAllergen
            }
            console.log('trying to post',newMealAllergen)
            fetch('http://localhost:3000/api/v1/meal_allergens', {
                method: "POST",
                 headers: {
                   "Content-Type": "application/json",
                   "Accept": "application/json"
                 },
                 body: JSON.stringify({meal_allergen: newMealAllergen})
               })
                 .then(res => res.json())
                 .then(newMealAllergenEntry => console.log(newMealAllergenEntry))
            })
       } else {
           console.log('no allergens to add')
       }
    }
        if (e.target.id === 'meal') {
            // console.log('im not mad at ya')
            const theAllergens = this.state.allergens.map(allergen => allergen.name);
            const stateForms = ['name','quantity','speed','calories','food_day_id'];
            const allOfEm = theAllergens.concat(stateForms);
            // finds all the dynamic allergens in my state and saves as object
            let listOfMealAllergens = {};
            this.state.allergens.map(allergen => {
                // console.log('hello buddy', allergen.name)
                listOfMealAllergens[allergen.id] = this.state[allergen.name]
            })
            let mealAllergenz = []
            for (const allergenz in listOfMealAllergens) {
                listOfMealAllergens[allergenz] === true ? mealAllergenz.push(allergenz) : console.log(`${allergenz} was false`)
            }
            console.log(listOfMealAllergens, mealAllergenz)
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
                 .then(mealEntry => {
                    mealEntry.id ? makeAllergens(mealEntry.id, mealAllergenz) : console.log('got an issue to solve')
                    })
            //    alert('Thank you for submitting your data!')
            //    this.resetMyState();
        } else if(e.target.name === 'caffiene' || e.target.name === 'alcohol') {
            console.log('its woikin', e.target)
            let tityType = e.target.name === 'caffiene' ? 'cQuantity' : 'aQuantity'
            const newDrink = {
                food_day_id:this.state.food_day_id,
                drink_type:this.state[e.target.name],
                quantity: parseInt(this.state[tityType], 10)
            }
            console.log(newDrink)
            console.log('is this thing on??')
            fetch(`http://localhost:3000/api/v1/drinks`, {
                method: "POST",
                 headers: {
                   "Content-Type": "application/json",
                   "Accept": "application/json"
                 },
                 body: JSON.stringify({drink: newDrink})
               })
                 .then(res => res.json())
                 .then(parsedResp => console.log(parsedResp) )
        }
        else if (e.target.name === 'symptoms') {
            const newSymptom = {
                name: this.state.symptomName,
                summary: this.state.symptomSummary,
                length: this.state.symptomLength,
                severity: this.state.symptomSeverity,
                food_day_id:this.state.food_day_id
            }
            fetch(`http://localhost:3000/api/v1/symptoms`, {
                method: "POST",
                 headers: {
                   "Content-Type": "application/json",
                   "Accept": "application/json"
                 },
                 body: JSON.stringify({symptom: newSymptom})
               })
                 .then(res => res.json())
                 .then(parsedResp => console.log(parsedResp) )
            }
        }

render() {
const todayData = this.state.food_day
if(todayData.meals) {
    console.log(todayData)
// console.log(todayData.meals.length > 0 ? 'hm' : 'fuck')
var dayMeals = todayData.meals.length
var dayDrinks = todayData.drinks.reduce((sum, oneDay) => sum + oneDay.quantity, 0)
var daySymptoms = todayData.symptoms
// console.log(todayData, daySymptoms)
}
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
        <form className='selectorForm' name='caffiene' onSubmit={this.onSubmit} >
        C A F F E I N E -=- F O R M<br />
        
        Caffiene:                   <select name='caffiene' value={this.state.caffiene} onChange={this.handleOnChange}>
                                        <option value='Coffee And Almond Milk'>Coffee And Almond Milk</option>
                                        <option value='Coffee And Cream'>Coffee And Cream</option>
                                        <option value='Energy Drink'>Energy Drink</option></select>
                                        <input onChange={this.handleOnChange} name='cQuantity' type='number' min='1' required/>
                                        <input type='submit' value='Add me'/><br/>
        </form>
        <form className='selectorForm' name='alcohol' onSubmit={this.onSubmit}>
        A L C O H O L -=- F O R M<br />
        Alcohol:                    <select name='alcohol' value={this.state.alcohol} onChange={this.handleOnChange}>
                                        <option value='Beer'>Beer</option>
                                        <option value='Wine'>Wine</option>
                                        <option value='Liquor'>Liquor</option></select>
                                        <input onChange={this.handleOnChange} name='aQuantity' type='number' min='1' required/>
                                        <input type='submit' value='Add me'/><br/><br/> 
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
        {this.props.user.username}, you've currently reported {dayMeals ? dayMeals : 'loading'} meal(s), {daySymptoms ? daySymptoms.length : 'loading'} symptoms, and {dayDrinks ? dayDrinks : 'loading'} drinks.<br/>
        Care to summarize your day overall?<br/>
        {addInput('symptomName','text')}<br/>
        </form>
        </div>
            )
    }
}

export default FoodJournal;