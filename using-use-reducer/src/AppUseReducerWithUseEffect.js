// Demonstrando o uso de reducer com useEffect
// para obter dados
import React, { useEffect, useReducer } from "react";
import './App.css'
import axios from 'axios'

// Embelezando a listagem
import 'bootstrap/dist/css/bootstrap.min.css'
import { Badge, ListGroup, ListGroupItem } from "reactstrap";

const initialState = {
    loading: true,
    error: '',
    todos: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_DATA':
            return {
                loading: false,
                error: "",
                todos: action.payload
            }        
        case 'SET_ERROR':
            return {
                loading: false,
                error: "There are some errors",
                todos: []
            }
        default:
            return state
    }
}

const AppUseReducerWithUseEffect = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    let listMarkup = (
            <ListGroup>
                {state.todos.map(todo => {
                    let statusBadge = todo.completed
                        ? (<Badge color="success">Completed</Badge>)
                        : (<Badge color="danger">Incomplete</Badge>)

                    return (
                        <ListGroupItem key={todo.id}>
                            {todo.title} {statusBadge}
                        </ListGroupItem>
                    )
                })}
            </ListGroup>
        )
    
    // O instrutor fez dessa forma, mas fica muito ruim de ler
    // então formatei do jeito acima.
    // (
    //     <ListGroup>
    //         {state.todos.map(todo => <ListGroupItem key={todo.id}>{todo.title} {todo.completed ? (<Badge color="success">Completed</Badge>) : (<Badge color="danger">Incomplete</Badge>)</ListGroupItem>)}
    //     </ListGroup>
    // )

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then((res) => {
                dispatch({ type: 'SET_DATA', payload: res.data })
            })
            .catch((err) => {
                dispatch({ type: 'SET_ERROR' })
            })
    }, [])

    return (
        <div className="App">
            {state.loading ? 'Loading...' : (state.error ? state.error : listMarkup)}
        </div>
    )
}

export default AppUseReducerWithUseEffect