import { useReducer } from "react"

const UseCounterWithReducer = ({initialState = { counter: 0 }}) => {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                return { ...state, counter: state.counter + (action.payload ?? 1) }
            case 'decrement':
                return { ...state, counter: state.counter - (action.payload ?? 1) }
            case 'reset':
                return initialState
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return [state, dispatch]
}

export default UseCounterWithReducer