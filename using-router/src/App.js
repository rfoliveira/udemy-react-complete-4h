import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import PageNotFound from './components/PageNotFound';
import Post from './components/Post';
import PrivateRoutes from './components/PrivateRoutes';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* O <Routes> substitui o <Switch>, que serve para quando temos várias rotas,
          mas só queremos que uma seja renderizada por vez*/}
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route exact path='/' element={<Home />} />
            <Route path='/about' element={<About />} />  
            <Route path='/contact' element={<Contact />} />  
            <Route path='/posts/:id' element={<Post />} />
            <Route path='*' element={<PageNotFound />} />  
          </Route>
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
