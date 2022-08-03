import React, { useState } from "react";
import { Grid } from '@material-ui/core'

import Carda from './Carda'

const products = [
  {id: 1, title: 'classical', description: 'Cтоимость за банку. Минимальный заказ - 60 шт.', price: '55 ₽', image:'/card1.jpg'},
  {id: 2, title: 'dark', description: 'Стоимость за банку. Минимальный заказ - 60 шт.', price: '60 ₽', image:'/card2.jpg'},
  {id: 3, title: 'mushrooms', description: 'Стоимость за банку. Минимальный заказ - 60 шт.', price: '60 ₽', image:'/card3.jpg'},
];

const Cards = () => {
  const [Cart, setCart] = useState([]);
  const handleClick = (product) => {
    setCart([...Cart, product]);
  };
  console.log(Cart)


  return (
    <main>
      <Grid container justifyContent='center' spacing={4}>
        {products.map(product =>
            <Grid item key={product.id} xs={12} sm={6} md={4}  lg={3}>
              <Carda product={product}  handleClick={handleClick} />
            </Grid>
          )}
      </Grid>
    </main>
  );
};

export default Cards