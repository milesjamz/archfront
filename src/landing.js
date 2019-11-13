import React from 'react'

function Landing(props) {
    return (
        <div>
            <h1>Welcome to QuarReport!</h1>
            <strong>The number one way to stay sane in the apocalypse</strong>
            <p id="regText">Hello, {props.user}! This is a resource that will help you to keep organized and stay productive while the world has ended. Most people are wasting this precious time. But not you, right?!</p>
        </div>
    )
}

export default Landing