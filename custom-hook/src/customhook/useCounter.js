import { useState } from 'react'

const UseCounter = (initialState = 0, value = 1) => {
    const [counter, setCounter] = useState(initialState)
    const increment = () => {
        setCounter(counter + value)
    }
    
    const decrement = () => {
        setCounter(counter - value)
    }
    
    const reset = () => {
        setCounter(initialState)
    }

    return [counter, increment, decrement, reset]

}

export default UseCounter