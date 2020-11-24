import React from 'react'

class FoodJournal extends React.Component {

    state = {
        allergens: [],
        mealName:'',
        mealSize:5,
        mealSpeed:5,
        mealCals:0,
        dude: true
    }

    API = 'http://localhost:3000/api/v1/'

    componentDidMount() {
        console.log(`${this.API}allergens`)
        fetch(`${this.API}allergens`)
        .then(resp => resp.json())
        .then(data => this.setState({allergens: data}))
    }

    onChange(e) {
        console.log(e.target.id)
    }

    handleOnChange(e) {
        console.log(e)
    }

render() {

const allergenBox = (allergen) => {
    console.log(allergen)
    return (
        <div key={allergen.id}>
            <label>{allergen.name}</label>
            <input type='checkbox' 
                key={allergen.id} 
                id={allergen.name} 
                checked={this.state.dude} 
                onChange={this.onChange} />  
        </div>
    )
}

const addAllergens = () => {
    console.log('doop de doo')
    if (this.state.allergens) {
         return this.state.allergens.map(allergen => allergenBox(allergen) )
            }
    }
const addInput = (name, type) => {
    return <span><input name={name} type={type} onChange={this.handleOnChange} required/> </span>
}
    return (
        <div className='eachPage'>
            Here's a list of stuff, ok? <br/>
        There will be a form for your meals today,<br/>
        and a form for your symptoms today,<br/>
        and a form for your exercises today.<br/>
        <button> and buttons to press to certify it all, baybee</button>
        <form>
        Here's a meal form<br/>
        What did you eat?{addInput('mealName','text')}<br/>
        How big a meal was it?(1 to 10){addInput('mealSize','number')}<br/>
        How fast did you shovel it down?(1 to 10){addInput('mealSpeed','number')}<br/>
        How many calories did it have?{addInput('mealCals','number')}<br/>
        What kind of allergens did it have?<br/>
        {addAllergens()}
        <button>push me push me push me</button>
        </form>
        =-=-=-=-=-==-=-=-=-=-=
        <form>
        Here's a symptom form<br/>
        What's wrong?<input type='text'></input><br/>
        Care to be more specific?<input type='text'></input><br/>
        How long did it last(minutes)?<input type='number' min='0' max='10'></input><br/>
        How severe was it(1 to 10)?<input type='number' min='0' max='10'></input><br/>
        <button>push me push me push me</button>
        </form>

        </div>
    )
}

}

export default FoodJournal