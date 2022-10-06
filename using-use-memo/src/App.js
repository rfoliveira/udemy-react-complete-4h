// Para que não tenhamos que um componente seja renderizado
// atualizado com um estado externo, podemos usar o useMemo
import React, {useMemo, useState} from 'react';
import './App.css';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';

function App() {
  const [countA, setCountA] = useState(0)
  const incrementA = () => {
    setCountA(countA + 1)
  }

  // Isso é para demonstrar que o valor no componente
  // somente será alterado, caso se chame este método, 
  // mas o valor do "renderCount" no componente segue o 
  // outro contador.
  const [countB, setCountB] = useState(0)
  const incrementB = () => {
    setCountB(countB + 1)
  }

  // Dessa forma não importa quantas vezes clicar para incrementar,
  // o componente A não terá o counter incrementado. Ele se manterá 
  // no estado atual definido dentro dele (renderCount = 0).
  const memoComponentA = useMemo(() => {
    return <ComponentA count={countA} />
  }, [countA])

  return (
    <div className="App">
      App.js count A: {countA}
      <p>
        <button onClick={incrementA}>Increment A</button>
      </p>
      <p>
        <button onClick={incrementB}>Increment B</button>
      </p>
      {memoComponentA}
      <p>
        <ComponentB count={countB} />
      </p>
    </div>
  );
}

export default App;
