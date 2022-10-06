import React, { useContext } from "react";
import { ButtonGroup, Button, Badge } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import { CounterContext } from "../AppContextWithReducer";
import ComponentC from "./ComponentC";

const ComponentB = () => {
    const counterContext = useContext(CounterContext)
    const { counter, dispatch } = counterContext 
    console.log('counterContext', counterContext)

    return (
        <div>
            <ButtonGroup>
                <Button color='primary' outline>
                    Component A Counter <Badge color='secondary'>{counter}</Badge>
                </Button>
            </ButtonGroup>
            <p></p>
            <ButtonGroup>
                <Button color='dark' onClick={() => dispatch({ type: 'increment' })}>Increment</Button>
                <Button color='dark' onClick={() => dispatch({ type: 'decrement' })}>Decrement</Button>
                <Button color='danger' onClick={() => dispatch({ type: 'reset' })}>Reset</Button>
            </ButtonGroup>
            <p></p>
            <ComponentC />
        </div>
    )
}

export default ComponentB