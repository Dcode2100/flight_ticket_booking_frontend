import React from 'react'
import { Counter } from "../features/counter/Counter"
import { Quotes } from "../features/quotes/Quotes"

type Props = {}

const CounterPage = (props: Props) => {
    return (
        <div className="App">
            <img className="App-logo" alt="logo" />
            <Counter />
            <p>
                Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <Quotes />
        </div>
    )
}

export default CounterPage