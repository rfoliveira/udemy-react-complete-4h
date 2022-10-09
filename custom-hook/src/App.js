import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import Form from './components/Form';
import FormHooked from './components/FormHooked';

function App() {
  return (
    <div className="App">
      <ComponentA />
      <p></p>
      <ComponentB />
      <p></p>
      <Form />
      <p></p>
      <FormHooked />
    </div>
  );
}

export default App;