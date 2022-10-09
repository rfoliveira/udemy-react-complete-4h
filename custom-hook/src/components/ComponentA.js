// import { useState } from 'react'
import { ButtonGroup, Button, Badge } from 'reactstrap'
import UseCounter from '../customhook/useCounter'

const ComponentA = () => {
    // const [counter, setCounter] = useState(0)
    // const increment = () => {
    //     setCounter(counter + 1)
    // }
    
    // const decrement = () => {
    //     setCounter(counter - 1)
    // }
    
    // const reset = () => {
    //     setCounter(0)
    // }
    
    // const [counter, increment, decrement, reset] = UseCounter(0)
    // Definindo o valor inicial...
    const [counter, increment, decrement, reset] = UseCounter(0, 5)

    return (
        <div>
            <ButtonGroup>
                <Button color="primary" outline>
                    ComponentA Counter <Badge color="secondary">{counter}</Badge>
                </Button>
            </ButtonGroup>
            <p></p>
            <ButtonGroup>
                <Button color="dark" onClick={increment}>Increment</Button>
                <Button color="dark" onClick={decrement}>Decrement</Button>
                <Button color="danger" onClick={reset}>Reset</Button>
            </ButtonGroup>
        </div>
    )
}

export default ComponentA