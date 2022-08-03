import React from "react";
import { Link } from "react-router-dom";


const Nav = () => {
  return (
      <ul>
        <li className='titleNav'><Link to="/">ква-съ</Link></li>
        <li className='subNav'><Link to="/shopping_cart">корзина</Link></li>
        <li className='subNav'><a href="///https://www.youtube.com/watch?v=PkT0PJwy8mI\\\">о нас</a></li>
        <li className='subNav'><Link to="/cards">продукты</Link></li>
      </ul>
  )
}

export default Nav