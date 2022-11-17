import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, auth} from './actions'

function App() {
  const counter = useSelector(state => state.counter)  
  const login = useSelector(state => state.login)
  const dispatch = useDispatch()  
  const btnLoginText = login ? 'logout' : 'login'

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {login ? <h3>Logged</h3> : <h3>Not yet logged</h3>}
      <button onClick={() => dispatch(auth())}>{btnLoginText}</button>
    </div>
  )
}

export default App
