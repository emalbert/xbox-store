import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import GamePass from './GamePass';
import Faq from './Faq';
import ItemDetailContainer from '../components/ItemDetailContainer';
import ItemListContainer from '../components/ItemListContainer';

const Home = () => {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path='/category/:idCategory' element={<ItemListContainer />} />
        <Route path='/item/:idProduct' element={<ItemDetailContainer />} />
        <Route path="/GamePass" element={<GamePass />} />
        <Route path="/Faq" element={<Faq />} />
    </Routes>
  </BrowserRouter>
  );
}

export default Home