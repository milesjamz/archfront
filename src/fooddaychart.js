import React from 'react'

class FoodDayChart extends React.Component {

    state = {
        dropdown:'hahahah',
        today:''
    }

    render() {
        return (
            <div>
                hello lovely<br/>
                <select>
                    <option>Pick your Date to Show:</option>
                    {this.props.days.map((day,i) => {
                    return    <option key={i} value={day.id}>{day.the_date}</option>
                    })}
                </select>
            </div>
        )
    }


}

export default FoodDayChart