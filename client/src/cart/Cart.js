import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CartItems from './CartItems';

import Checkout from './Checkout';
import Container from '@material-ui/core/Container';
import Footer from '../components/Footer';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 30,
  },
  outer: {
    padding: 20
  }
}));

export default function Cart() {
  const classes = useStyles();
  const [checkout, setCheckout] = useState(false);

  const showCheckout = val => {
    setCheckout(val);
  };

  return (
    // <div className={classes.root}>
    <Container maxWidth="sm" className={classes.outer}>
      <Grid container>
        <Grid item xs={12}>
          <CartItems checkout={checkout} setCheckout={showCheckout}/>
        </Grid>
        {checkout &&
        <Grid item xs={12}>
          <Checkout/>
        </Grid>}
      </Grid>
      <Footer/>
    </Container>
    // </div>
  );
}