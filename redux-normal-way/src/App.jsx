import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const counter = useSelector(state => state.counter)  
  const login = useSelector(state => state.login)
  const dispatch = useDispatch()  

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <p>
        {login ? <h3>Logged</h3> : <h3>Not yet logged</h3>}
      </p>
    </div>
  )
}

export default App
