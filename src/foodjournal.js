import React from 'react'

class FoodJournal extends React.Component {

    state = {
        hmm: [],
    }

    componentDidMount() {
        console.log('fuck dude what the shiet')
    }

render() {
    return (
        <div className='eachPage'>
            Here's a list of stuff, ok? <br/>
        There will be a form for your meals today,<br/>
        and a form for your symptoms today,<br/>
        and a form for your exercises today.<br/>
        <button> and buttons to press to certify it all, baybee</button>
        <form>
        Here's a meal form<br/>
        What did you eat?<input label='summary of today' type='text'></input><br/>
        How big a meal was it?<input label='summary of today' type='text'></input><br/>
        How fast did you shovel it down?<input label='summary of today' type='text'></input>
        </form>

        <form>
        Here's a symptom form<br/>
        What's wrong?<input label='summary of today' type='text'></input><br/>
        Care to be more specific?<input label='summary of today' type='text'></input><br/>
        How long did it last<input label='summary of today' type='text'></input><br/>
        How severe was it?<input label='summary of today' type='text'></input>
        </form>

        </div>
    )
}

}

export default FoodJournal