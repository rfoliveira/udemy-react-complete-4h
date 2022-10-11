import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />  
          <Route path='/about' element={<About />} />  
          <Route path='/contact' element={<Contact />} />  
        </Routes>
      </div>
    </Router>
  );
}

export default App;
