import React, { useState } from "react";
import { Grid } from '@material-ui/core'

import Carda from './Carda'

const Cards = (props) => {
  // const [Cart, setCart] = useState([]);
  // const handleClick = (product) => {
  //   setCart([...Cart, product]);
  // };
  // console.log(Cart)    handleClick={handleClick}

  let Count = (m) => {
    let c = {}
    m.forEach(item => {
      c[item.id] = (c[item.id] || 0) + 1; 
    });
    return c
  }
  console.log(Count(props.state.basket.shoppingCart))
  
  return (
    <main>
      <Grid container justifyContent='center' spacing={4}>
        {props.state.products.card.map(product =>
            <Grid item key={product.id} xs={12} sm={6} md={4}  lg={3}>
              <Carda product={product} addProduct={props.addProduct} />
            </Grid>
          )}
      </Grid>
    </main>
  );
};

export default Cards