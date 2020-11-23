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
        What did you eat?<input type='text'></input><br/>
        How big a meal was it?(1 to 10)<input type='number' min='0' max='10' ></input><br/>
        How fast did you shovel it down?(1 to 10)<input type='number' min='0' max='10'></input><br/>
        What kind of allergens did it have?<input type='number' min='0' max='10'></input><br/>
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