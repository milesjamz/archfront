import React from 'react'

class FoodJournal extends React.Component {

    state = {
        allergens: [],
        dude: false
    }

    API = 'http://localhost:3000/api/v1/'

    componentDidMount() {
        console.log(`${this.API}allergens`)
        fetch(`${this.API}allergens`)
        .then(resp => resp.json())
        .then(data => this.setState({allergens: data}))
    }

    handleInputChange() {
        console.log('dude')
    }

render() {

const allergenBox = (allergen) => {
    console.log(allergen)
    return (
        <div>
            <label>{allergen.name}</label>
            <input type='checkbox' 
                key={allergen.id} 
                id={allergen.name} 
                checked={this.state.dude} 
                onChange={this.handleInputChange} />  
        </div>
    )
}

const addAllergens = () => {
    console.log('doop de doo')
    if (this.state.allergens) {
         return this.state.allergens.map(allergen => allergenBox(allergen) )
            }
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
        What did you eat?<input type='text'></input><br/>
        How big a meal was it?(1 to 10)<input type='number' min='0' max='10' ></input><br/>
        How fast did you shovel it down?(1 to 10)<input type='number' min='0' max='10'></input><br/>
        What kind of allergens did it have?<br/>
        {addAllergens()}
        How many calories did it have?<input type='number' min='0'></input><br/>
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