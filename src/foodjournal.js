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
            <t>
            <ul>
                <li>here's some things</li>
            </ul>
            </t>
            <ol>
                <li>
                    here's some other things
                </li>
            </ol>

            <button onClick={() => alert('fuck my ssweeet pussy')}>
                push my little ass
            </button>

        </div>
    )
}

}

export default FoodJournal