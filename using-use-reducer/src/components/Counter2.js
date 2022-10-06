import React, { useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, ButtonGroup, Badge } from 'reactstrap'

const initialState = {
    counter1: 0,
    counter2: 10
}

const reducer = (state, action) => {
    // Obs.: se n]ao colocar o "action.payload ?? 1"
    // entre parênteses retorna NaN, gerando erro no Badge
    switch (action.type) {
        case 'increment':
            return { ...state, counter1: state.counter1 + (action.payload ?? 1) }        
        case 'decrement':
            return { ...state, counter1: state.counter1 - (action.payload ?? 1) }        
        case 'increment2':
            return { ...state, counter2: state.counter2 + (action.payload ?? 1) }        
        case 'decrement2':
            return { ...state, counter2: state.counter2 - (action.payload ?? 1) }        
        case 'reset':
            return initialState
        default:
            return state
    }
}

const Counter2 = () => {
    const [count, dispatch] = useReducer(reducer, initialState)    

    return (
        <div>
            <ButtonGroup>
                <Button color="primary" outline>
                    Counter 1 <Badge color='secondary'>{count.counter1}</Badge>
                </Button>
                <Button color='primary' outline>
                    Counter 2 <Badge color='secondary'>{count.counter2}</Badge>
                </Button>
            </ButtonGroup>
            <p></p>
            <ButtonGroup>
                <Button color="dark" onClick={() => dispatch({type: 'increment'})}>Increment 1</Button>
                <Button color="dark" onClick={() => dispatch({type: 'decrement'})}>Decrement 1</Button>
            </ButtonGroup>
            <p></p>
            <ButtonGroup>
                <Button color="dark" onClick={() => dispatch({type: 'increment2'})}>Increment 2</Button>
                <Button color="dark" onClick={() => dispatch({type: 'decrement2'})}>Decrement 2</Button>
            </ButtonGroup>
            <p></p>
            <ButtonGroup>
                <Button color="dark" onClick={() => dispatch({type: 'increment', payload: 5})}>Increment 5</Button>
                <Button color="dark" onClick={() => dispatch({type: 'decrement', payload: 5})}>Decrement 5</Button>
            </ButtonGroup>
            <p></p>
            <Button color="danger" onClick={() => dispatch({type: 'reset'})}>Reset</Button>
        </div>
    )
}

export default Counter2