import React from 'react';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Reservation from './pages/Reservation';

const App = () => {
  return (
    <div>
    
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/reservation' element={<Reservation/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
