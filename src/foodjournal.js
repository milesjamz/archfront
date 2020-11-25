import React from 'react'

class FoodJournal extends React.Component {

    state = {
        allergens: [],
        mealName:'',
        mealSize:5,
        mealSpeed:5,
        mealCals:0,
    }

    API = 'http://localhost:3000/api/v1/'

    componentDidMount() {
        fetch(`${this.API}allergens`)
        .then(resp => resp.json())
        .then(data => {
            this.setState({allergens: data})
            this.addBoxValues()
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
        console.log(e)
    }

render() {

const allergenBox = (allergen) => {
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
    if (type === 'number') {
        if (params === 'oneTen') {
            return <span> <input name={name} id ={name} type={type} value={[this.state.type]} onChange={this.handleOnChange} min='0' max='10' required/> </span>
        } else {
            return <span> <input name={name} id ={name} type={type} value={this.state.type} onChange={this.handleOnChange} min='0' required/> </span>
        }
    } else {
    return <span> <input name={name} id ={name} type={type} value={this.state.type} onChange={this.handleOnChange} required/> </span>
    }
}
    return (
        <div className='eachPage'>
            Here's a list of stuff, ok? <br/>
        There will be a form for your meals today,<br/>
        and a form for your symptoms today,<br/>
        and a form for your exercises today.<br/>
        <button> and buttons to press to certify it all, baybee</button>
        <form className ='selectorForm' onSubmit={this.onSubmit}>
        Here's a meal form<br/>
        What did you eat?{addInput('mealName','text')}<br/>
        How big a meal was it?(1 to 10){addInput('mealSize','number','oneTen')}<br/>
        How fast did you shovel it down?(1 to 10){addInput('mealSpeed','number','oneTen')}<br/>
        How many calories did it have?{addInput('mealCals','number')}<br/>
        What kind of allergens did it have?<br/>
        {addAllergens()}
        <input type='submit' value='push me'/>
        </form>
        =-=-=-=-=-==-=-=-=-=-=
        <form className ='selectorForm' onSubmit={this.onSubmit}>
        Here's a symptom form<br/>
        What's wrong?{addInput('symptomName','text')}<br/>
        Care to be more specific?{addInput('symptomSummary','text')}<br/>
        How long did it last(minutes)?{addInput('symptomLength','number')}<br/>
        How severe was it(1 to 10)?{addInput('symptomSeverity','number')}<br/>
        <input type='submit' value='push me'/>
        </form>

        </div>
            )
    }
}

export default FoodJournal;