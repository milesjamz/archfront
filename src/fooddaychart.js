import React from 'react'

class FoodDayChart extends React.Component {

    state = {
        dropdown:'hahahah',
        today:{},
        allergenList:[]
    }

    handleOnChange = (e) => {
        // console.log(e.target.value)
        let myDay = this.props.days.find(day => day.id === parseInt(e.target.value, 10))
        console.log(myDay)
        this.setState({today:myDay, dropdown:e.target.value})
        if (this.state.today.meals) {
            let arrayOfAlls = this.state.today.meals.map( oneMeal => oneMeal.allergens ? oneMeal.allergens.map(allergen => allergen.name) : null )
            this.setState({ allergenList:[...new Set( arrayOfAlls.flat() ) ] } )
        }
    }
    
    render() {

        return (
            <div>
                hello lovely<br/>
                <select value={this.state.dropdown} onChange={this.handleOnChange}>
                    <option>Pick your Date to Show:</option>
                    {this.props.days.map((day,i) => {
                    return    <option key={i} value={day.id}>{day.the_date}</option>
                    })}
                </select>
                <h1>these were the days of my foood</h1>
                    {this.state.today.the_date ? `Date: ${this.state.today.the_date}` : null }<br/>
                    <ul>
                <li />{this.state.today.meals ? `Meals: ${this.state.today.meals.length}` : null}<br/><br/>
                { this.state.today.meals ? this.state.today.meals.map(meal => <li key={meal.id}>{meal.name} - {meal.calories} calories</li>) : null }<br/>
                <li />{ this.state.allergenList ? `Allergens: ${this.state.allergenList.length}` : null}<br/><br/>
                { this.state.allergenList ? this.state.allergenList.map((allergen,i) => <li key={i}>{allergen} </li>) : null }<br/>
                <li />{this.state.today.drinks ? `Drinks: ${this.state.today.drinks.reduce((sum, oneDay) => sum + oneDay.quantity, 0)}` : null}<br/>
                { this.state.today.drinks ? this.state.today.drinks.map(drink => <li key={drink.id}> {drink.quantity} {drink.drink_type}s</li>) : null }<br/>
                <li />{this.state.today.symptoms ? `Symptoms: ${this.state.today.symptoms.length}` : null}
                { this.state.today.symptoms ? this.state.today.symptoms.map(symptom => <li key={symptom.id}> {symptom.name} - {symptom.length} minutes long - {symptom.severity} out of 10 severity </li>) : null}
                </ul>
            </div>
        )
    }


}

export default FoodDayChart