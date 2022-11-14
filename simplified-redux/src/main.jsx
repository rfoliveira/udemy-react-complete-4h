import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// Não recomendado, mas usado pelo instrutor
import { createStore } from 'redux'

// actions
const increment = (value) => {
  return { type: 'INCREMENT', payload: value }
}

const decrement = () => {
  return { type: 'DECREMENT' }
}

// reducers
const counterReducer = (state= 0 , action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + (action.payload ?? 1)
    case 'DECREMENT':
      return state - (action.payload ?? 1)
    default:
      return state
  }
}

// Create a store
// Nâo recomendado, mas usado pelo instrutor
let store = createStore(counterReducer)

// display
store.subscribe(() => {
  console.log(store.getState())
})

// dispatch the actions
store.dispatch(increment(4))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
