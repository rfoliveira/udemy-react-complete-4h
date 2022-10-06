// With multiples reducers
import React, { useReducer } from 'react'
import { Button, ButtonGroup, Badge } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const initialState = {
    counter: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, counter: state.counter + (action.payload ?? 1)}
        case 'decrement':
            return { ...state, counter: state.counter - (action.payload ?? 1)}
        case 'reset':
            return initialState    
        default:
            return state
    }
}

const Counter3 = () => {
    const [state1, dispatch1] = useReducer(reducer, initialState)
    const [state2, dispatch2] = useReducer(reducer, initialState)

    return (
        <div>
            <ButtonGroup>
                <Button color='primary' outline>
                    Counter 1 <Badge color='secondary'>{state1.counter}</Badge>
                </Button>
                <Button color='primary' outline>
                    Counter 2 <Badge color='secondary'>{state2.counter}</Badge>
                </Button>
            </ButtonGroup>
            <p></p>
            <ButtonGroup>
                <Button color='dark' onClick={() => dispatch1({ type: 'increment' })}>Increment</Button>
                <Button color='dark' onClick={() => dispatch1({ type: 'decrement' })}>Decrement</Button>
                <Button color='danger' onClick={() => dispatch1({ type: 'reset' })}>Reset</Button>
            </ButtonGroup>
            <p></p>
            <ButtonGroup>
                <Button color='dark' onClick={() => dispatch2({ type: 'increment' })}>Increment</Button>
                <Button color='dark' onClick={() => dispatch2({ type: 'decrement' })}>Decrement</Button>
                <Button color='danger' onClick={() => dispatch2({ type: 'reset' })}>Reset</Button>
            </ButtonGroup>
        </div>
    )
}

export default Counter3