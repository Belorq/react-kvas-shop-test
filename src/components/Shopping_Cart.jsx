import React from "react";
import { Container, Typography, Grid } from '@material-ui/core';
import useStyles from './styles';

const Shopping_Cart = ({ Cart }) => {
  const isEmpty = true;
  const classes = useStyles([])


  const EmptyCart = () => (
    <Typography variant='subtitle1'>Корзина пуста</Typography>
  );
    const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {Cart.map((item) =>  (
          <Grid item xs={12} sm={4} key={item.id}>
            <div>{item.title}</div>
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
          <Typography variant='h4'>
          </Typography>
      </div>
    </>
    );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} varaint='h3'>Корзина</Typography>
      { isEmpty ? <EmptyCart /> : <FilledCart  />}
    </Container>
  )
}

export default Shopping_Cart