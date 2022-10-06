import React, { useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, ButtonGroup } from 'reactstrap'

const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

const Counter = () => {
    // An alternative to useState.
    // useReducer is usually preferable to useState when you have complex
    // state logic that involves multiple sub-values. 
    // It also lets you optimize performance for components that 
    // trigger deep updates because you can pass dispatch down instead of callbacks.
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>{count}</div>
            <ButtonGroup>
                <Button color="dark" onClick={() => dispatch('increment')}>increment</Button>
                <Button color="dark" onClick={() => dispatch('decrement')}>decrement</Button>
                <Button color="danger" onClick={() => dispatch('reset')}>reset</Button>
            </ButtonGroup>
        </div>
    )
}

export default Counter