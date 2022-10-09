import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';

function App() {
  return (
    <div className="App">
      <ComponentA />
      <p></p>
      <ComponentB />
    </div>
  );
}

export default App;