import React from 'react'

class FoodDayChart extends React.Component {

    state = {
        dropdown:'hahahah',
        today:{}
    }

    handleOnChange = (e) => {
        // console.log(e.target.value)
        let myDay = this.props.days.find(day => day.id == e.target.value)
        // console.log(this.props.days[0].id, e.target.value, myDay)
        this.setState({today:myDay, dropdown:e.target.value})
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
                <p>
                    Date:{this.state.today ? this.state.today.the_date : 'loading'}<br/>
                    <ul>
                <li />Meals:{this.state.today.meals ? this.state.today.meals.length : null}<br/>
                { this.state.today.meals ? this.state.today.meals.map(meal => <li key={meal.id}>{meal.name}</li>) : null }
                <li />Drinks:{this.state.today.drinks ? this.state.today.drinks.length : null}
                { this.state.today.drinks ? this.state.today.drinks.map(drink => <li key={drink.id}>{drink.quantity} {drink.drink_type}s</li>) : null }
                <li />Symptoms:{this.state.today.symptoms ? this.state.today.symptoms.length : null}
                </ul>
                </p>
            </div>
        )
    }


}

export default FoodDayChart