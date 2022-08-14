import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import useStyles from '../styles';
import { addProduct } from '../../state';
const CartItem = ({ product }) => {
    const classes = useStyles([])
    return (
    <Card>
        <CardMedia image={product.image} alt={product.title} className={classes.media} />
        <CardContent className={classes.cardContent}>
            <Typography variant="h4">{product.title}</Typography>
            <Typography variant="h5">{product.price}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
            <div className={classes.buttons}>
                <Button type='button' size='small'>-</Button>
                <Typography>f</Typography>
                <Button type='button' size='small'>+</Button>
            </div>
        </CardActions>
    </Card>
  )
}

export default CartItem