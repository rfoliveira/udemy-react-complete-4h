import './App.css';
import { useRef, useState } from 'react'
import Component from './components/Component';

function App() {
  // useRef returns a mutable ref object whose .current property 
  // is initialized to the passed argument (initialValue). 
  // The returned object will persist for the full lifetime of the component.
  // Note that useRef() is useful for more than the ref attribute. 
  // It’s handy for keeping any mutable value around similar to 
  // how you’d use instance fields in classes.
  const inputRef = useRef()
  const [show, setShow] = useState(true)
  const toggleShowHide = () => {
    setShow(!show)
  }

  return (
    <div className="App">
      <h1>Focus on input field</h1>
      <input ref={inputRef} type="text" />     
      <input type="text" />
      <input type="text" />
      {/* Ao clicar no botão, irá focar o input com o ref={inputRef} definido */}
      <button onClick={() => inputRef.current.focus()}>Focus</button>
      <p></p>
      {/* Dessa forma, vai dar erro quando clicar para ocultar o componente e
      ele executar (no timout dele), pois o componente deixará de estar no DOM,
      o que fará com que o react não consiga controlá-lo. 
      (Esse erro não acontece) */}
      <button onClick={toggleShowHide}>Toggle compoment</button>
      <h1>Unmount component</h1>
      {show && <Component />}
    </div>
  );
}

export default App;
