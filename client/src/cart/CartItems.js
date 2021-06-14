import React, { useContext, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import cart from './cart-helper.js';
import { Link as RouterLink } from 'react-router-dom';
import { Box, ButtonGroup } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { Context } from '../App';
// import { Link as RouterLink } from 'react-router-dom';
const useStyles = makeStyles(theme => ({
  card: {
    // margin: '24px 0px',
    // padding: '16px 40px 60px 40px',
    // backgroundColor: '#80808017'
  },
  title: {
    margin: theme.spacing(2),
    color: theme.palette.openTitle,
    fontSize: '1.2em'
  },
  price: {
    color: theme.palette.text.secondary,
    display: 'inline'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: 0,
    width: 50
  },
  productTitle: {
    fontSize: '1.15em',
    marginBottom: '5px',
    textDecoration: 'none'
  },
  subheading: {
    color: 'rgba(88, 114, 128, 0.67)',
    padding: '8px 10px 0',
    cursor: 'pointer',
    display: 'inline-block'
  },
  cart: {
    width: '100%',
    marginBottom: 10,
    display: 'inline-flex'
  },
  details: {
    display: 'inline-block',
    width: '100%',
    padding: 3
  },
  content: {
    flex: '1 0 auto',
    padding: '16px 8px 0px'
  },
  cover: {
    // width: 160,
    // height: 125,
    // margin: '8px',
    minWidth: '10vh',
    width: '40vh',
    display: 'inline-block',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center'
  },
  itemTotal: {
    float: 'right',
    // marginRight: '40px',
    marginRight: 3,
    fontSize: '1.5em',
    color: 'rgb(72, 175, 148)'
  },
  checkout: {
    // float: 'right',
    // margin: '24px'
    marginTop: 10,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  // total: {
  //   fontSize: '1.2em',
  //   color: 'rgb(53, 97, 85)',
  //   marginRight: '16px',
  //   fontWeight: '600',
  //   verticalAlign: 'bottom'
  // },
  continueBtn: {
    marginLeft: '10px'
  },
  itemShop: {
    display: 'block',
    fontSize: '0.90em',
    color: '#78948f'
  },
  removeButton: {
    fontSize: '0.7em'
  }
}));

export default function CartItems(props) {
  const classes = useStyles();
  const [cartItems, setCartItems] = useState(cart.getCart());
  const { cartStore, userStore } = useContext(Context);

  const handleChange = index => event => {
    let updatedCartItems = cartItems;
    if (event.target.value == 0) {
      updatedCartItems[index].quantity = 1;
    } else {
      if (updatedCartItems[index].quantity < parseInt(event.target.value)) {
        cartStore.increment(updatedCartItems[index].product);
      } else {
        cartStore.decrement(updatedCartItems[index].product);
      }
      updatedCartItems[index].quantity = parseInt(event.target.value);
    }
    console.log(updatedCartItems[index].quantity);
    setCartItems([...updatedCartItems]);
    cart.updateCart(index, parseInt(event.target.value));
  };

  const getTotal = () => {
    return cartItems.reduce((a, b) => {
      return a + (b.quantity * b.product.price);
    }, 0);
  };

  const removeItem = index => event => {
    cartStore.remove(cartItems[index].product);
    setCartItems(cart.getCart());
  };

  const openCheckout = () => {
    props.setCheckout(true);
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      {cartItems.length > 0 ? (
        <span>
          {cartItems.map((item, i) => {
            return <span key={i}>
              <Card className={classes.cart}>
              <CardMedia
                className={classes.cover}
                image={'http://localhost:7000/' + item.product.image}
                title={item.product.name}
              />
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Link to={'/shop/' + item.product.id}
                        variant="h3" color="primary"
                        component={RouterLink} className={classes.productTitle}>
                      {item.product.name}
                  </Link>
                  <div>
                    <Typography type="subheading" component="h3" className={classes.price}
                                color="primary">₸ {item.product.price}</Typography>
                    {/*<span className={classes.itemTotal}>₸{item.product.price * item.quantity}</span>*/}
                    {/*<span className={classes.itemShop}>Shop: {item.product.shop.name}</span>*/}
                  </div>
                </CardContent>
                <div className={classes.subheading}>
                  Quantity: <TextField
                  value={item.quantity}
                  onChange={handleChange(i)}
                  type="number"
                  size="small"
                  inputProps={{
                    min: 1
                  }}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"/>
                  <Box display="flex" justifyContent="space-between" flexWrap="wrap">
                    <Button className={classes.removeButton} color="primary" onClick={removeItem(i)}>x Remove</Button>
                    <span className={classes.itemTotal}>₸{item.product.price * item.quantity}</span>
                  </Box>
                </div>
              </div>
            </Card>
          </span>;
          })
          }
          <div className={classes.checkout}>
          <Typography variant={'h4'} gutterBottom>Total: ₸{getTotal()}</Typography>
          <Box flex flexWrap>
            <ButtonGroup>
              <Button color="primary" component={RouterLink} to="/shop">Continue Shopping</Button>
              {userStore.isAuth ?
                <Button color="primary" variant="contained" onClick={openCheckout}>Order</Button>
                :
                <Button color="primary" component={RouterLink} to="/signin">Login to order</Button>
              }
            </ButtonGroup>
          </Box>
        </div>
        </span>
      ) : (<>
        <Typography variant="subtitle1" component="h3" color="primary" gutterBottom>No items added to your cart.</Typography>
        <Button color="primary" variant="outlined" component={RouterLink} to="/shop">Go to shop</Button>
      </>)}
    </>
  );
}

CartItems.propTypes = {
  checkout: PropTypes.bool.isRequired,
  setCheckout: PropTypes.func.isRequired
};