import React from "react";
import { Container, Typography, Grid, Button } from '@material-ui/core';
import useStyles from '../styles';
import CartItem from "./CartItem";


const Shopping_Cart = (props) => {
  const classes = useStyles([])
  const EmptyCart = () => (
    <Typography variant="subtitle1">Корзина пуста</Typography>
  );

    debugger
  const FilledCard = () => (
    // добавить общую стоимость
    <>
      <Grid container spacing={3}>
          {props.state.basket.shoppingCart.map(product =>
            <Grid item xs={12} sm={4} key={product.id}>
              <CartItem product={product} />
            </Grid>
          )}
      </Grid>
      <div className={classes.cardDetails}>
            <Typography variant="h4">
              Текст
            </Typography>
            <div>
              <Button className={classes.emptyButton} size='large' type='button' variant='contained' color='secondary'>Очистить корзину</Button>
            </div>
      </div>
    </>
  );
  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant='h3'>Корзина</Typography>
      { !props.state.basket.shoppingCart.length ? <EmptyCart /> : <FilledCard />}
    </Container>
  )       
}

export default Shopping_Cart