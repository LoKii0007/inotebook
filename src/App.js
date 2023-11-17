import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import About from './components/about';
import Home from './components/home';
import Navbar from './components/navbar';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>

      <Routes>
        <Route exact path='/about'element={<About/>} />
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/signup' element={<Signup/>} />
      </Routes>
    </Router>
  );
}

export default App;
