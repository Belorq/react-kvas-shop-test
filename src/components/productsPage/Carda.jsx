import React from "react";
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons'

import useStyles from '../styles';

const Carda = (props) => {
  const classes = useStyles();
  let addProduct = () => {
    props.addProduct(props.product);
  }
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={props.product.image} title={props.product.title} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant='h5' gutterBottom>
            {props.product.title}
          </Typography>
          <Typography variant='h5'>
            {props.product.price}
          </Typography>
        </div>
        <Typography variant='body2' color='textSecondary'>{props.product.description}</Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label='Добавить в корзину' onClick={ addProduct }>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  )

}

export default Carda