import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Cart from './pages/Cart';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/About' element={<About />}></Route>
          <Route exact path='/Products' element={<Products />}></Route>
          <Route exact path='/Cart' element={<Cart />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
