// import { useReducer } from 'react'
import { ButtonGroup, Button, Badge } from 'reactstrap'
import UseCounterWithReducer from '../customhook/useCounterWithReducer'

const initialState = {
    counter: 0
}

// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'increment':
//             return { ...state, counter: state.counter + (action.payload ?? 1) }
//         case 'decrement':
//             return { ...state, counter: state.counter - (action.payload ?? 1) }
//         case 'reset':
//             return initialState
//         default:
//             return state
//     }
// }

const ComponentB = () => {
    // const [state, dispatch] = useReducer(reducer, initialState)
    const [state, dispatch] = UseCounterWithReducer(initialState)

    return (
        <div>
            <ButtonGroup>
                <Button color="primary" outline>
                    ComponentB Counter <Badge color="secondary">{state.counter}</Badge>
                </Button>
            </ButtonGroup>
            <p></p>
            <ButtonGroup>
                <Button color="dark" onClick={() => dispatch({type: 'increment'})}>Increment</Button>
                <Button color="dark" onClick={() => dispatch({ type: 'decrement'})}>Decrement</Button>
                <Button color="dark" onClick={() => dispatch({type: 'increment', payload: 5})}>Increment 5</Button>
                <Button color="dark" onClick={() => dispatch({ type: 'decrement', payload: 5})}>Decrement 5</Button>
                <Button color="danger" onClick={() => dispatch({ type: 'reset'})}>Reset</Button>
            </ButtonGroup>
        </div>
    )
}

export default ComponentB