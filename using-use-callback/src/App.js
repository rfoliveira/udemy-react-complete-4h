import { useCallback, useState } from 'react';
import './App.css';

const functionCoounter = new Set()

function App() {
  
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  
  // A cada clique no botão de incremet ou increment2,
  // é definido o método e acrescentado na listagem "functionCounter"
  // const increment = () => {
  //   console.log('increment')
  //   setCount(count + 1)
  // }
  // const increment2 = () => {
  //   console.log('increment2')
  //   setCount2(count2 + 1)
  // }

  // functionCoounter.add(increment)
  // functionCoounter.add(increment2)
  // console.log(functionCoounter)

  // Dessa forma, só irá ser definidos os métodos e 
  // incluído no Set, uma única vez. Pra isso que
  // se usa useCallback
  const increment = useCallback(() => {
    console.log('increment')
    setCount(count + 1)
  }, [count])
  
  const increment2 = useCallback(() => {
    console.log('increment2')
    setCount2(count2 + 1)
  }, [count2])

  // Será acrescentado apenas uma vez a cada clique, 
  // e não duas.
  functionCoounter.add(increment)
  functionCoounter.add(increment2)
  console.log(functionCoounter)

  return (
    <div className="App">
      <p>Count 1: {count}</p>
      <p>Count 2: {count2}</p>
      <button onClick={increment}>Increase counter 1</button>
      <button onClick={increment2}>Increase counter 2</button>
    </div>
  );
}

export default App;
