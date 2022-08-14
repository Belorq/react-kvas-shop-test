import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Cards from './productsPage/Cards'
import Shopping_Cart from './shoppingBasket/Shopping_Cart'
import Posts from './mainPage/Posts';

const Main = (props) => {
  return (
    <Routes>
            <Route exect path='/' element={<Posts state={props.state} />}></Route>
            <Route exact path='/cards' element={<Cards state={props.state} addProduct={props.addProduct} />}></Route>
            <Route exact path='/shopping_cart' element={<Shopping_Cart state={props.state} />}></Route>
    </Routes>
  );
}

export default Main