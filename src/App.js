import './App.css';
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
      </Routes>
    </Router>
  );
}

export default App;
