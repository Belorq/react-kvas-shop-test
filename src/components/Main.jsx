import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Cards from './Cards'
import Shopping_Cart from './Shopping_Cart'
import Posts from './Posts';

const Main = () => {
  return (
    <Routes>
            <Route exect path='/' element={<Posts />}></Route>
            <Route exact path='/cards' element={<Cards />}></Route>
            <Route exact path='/shopping_cart' element={<Shopping_Cart />}></Route>
    </Routes>
  );
}

export default Main