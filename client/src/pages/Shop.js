import React, { useContext, useEffect, useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import BackgroundImage from '../assets/shop-background-square-min.jpg';
import { LinearProgress, Paper } from '@material-ui/core';
import { ShopAPI } from '../http';
import { Context } from '../App';
import { observer } from 'mobx-react-lite';
import Footer from '../components/Footer';
import { Link as RouterLink } from 'react-router-dom';
import TrendingFlatRoundedIcon from '@material-ui/icons/TrendingFlatRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import RemoveShoppingCartRoundedIcon from '@material-ui/icons/RemoveShoppingCartRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    backgroundImage: `url(${BackgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto', // auto 100vw
    // backgroundPosition: 'center center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  heroButtons: {
    marginTop: theme.spacing(4),
    opacity: '1.0'
  },
  cardGrid: {
    paddingTop: theme.spacing(13),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    // paddingTop: '56.25%',
    paddingTop: '80%',
    maxWidth: '100%',
    height: 'auto'
  },
  cardContent: {
    flexGrow: 1,
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  imgOuter: {
    backgroundColor: 'white',
    height: '200px',
    display: 'flex',
    justifyContent: 'center'
  },
  imgInner: {
    height: '100%'
  }
}));


const Shop = observer(() => {
  const classes = useStyles();

  const { userStore, shopStore, themeStore, cartStore } = useContext(Context);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(cartStore.cart);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    const response = await ShopAPI.getAllProducts();
    // if (response.success) {
    // shopStore.setProducts(response.data);
    setProducts(response.data);
    setLoading(false);
    // }
  };

  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth' });

  useEffect(getProducts, []);

  /*  const [open, setOpen] = useState(false);

    const onBuy = () => {
      if (userStore.isAuth) {

      }
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };*/

  const handleRemove = (product) => {
    cartStore.removeOne(product);
    setCart(cartStore.cart);
  };
  const handleBuy = (product) => {
    console.log(product);
    cartStore.add(product);
    setCart(cartStore.cart);
  };

  const productAction = (product) => {
    if (cart.find(item => item.product.id === product.id)) {
      return (
        <Button size="medium" color="secondary" variant="contained" startIcon={<RemoveShoppingCartRoundedIcon/>}
                onClick={() => handleRemove(product)}>
          Remove
        </Button>
      );
    }
    return (
      <Button size="medium" color="primary" variant="contained" startIcon={<ShoppingCartRoundedIcon/>}
              onClick={() => handleBuy(product)}>
        Buy
      </Button>
    );
  };

  return (loading ? <LinearProgress color="secondary"/> :
    <React.Fragment>
      <div className={classes.heroContent}>
        <Container maxWidth="md">
          <Paper elevation={10} style={{ backgroundColor: themeStore.shop, padding: 20 }}>
            <Typography color={'textPrimary'} component="h1" variant="h2" align="center" style={{ fontWeight: 'bold' }}
                        gutterBottom>
              Digital Urpaq Shop
            </Typography>
            <Typography variant="h5" align="center" paragraph>
              Order online at the best price. Delivery all over the Kazakhstan.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                {userStore.isAuth && (
                  <Grid item>
                    <Button variant="contained" color="primary" size={'large'} component={RouterLink}
                            to={`/product-create`} endIcon={<AddRoundedIcon/>}>
                      Create products
                    </Button>
                  </Grid>
                )}
                <Grid item>
                  <Button variant="contained" color="primary" size={'large'} onClick={executeScroll}
                          endIcon={<TrendingFlatRoundedIcon/>}>
                    View products
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Paper>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="lg" ref={myRef}>
        <Grid container spacing={3}>
          {products.map(product => (
            <Grid item key={product.id} xs={12} sm={6} md={4} id={product.id}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={`http://localhost:7000/${product.image}`}
                  title={product.name}
                />
                {/*<div className={classes.imgOuter}>
                  <img src={`http://localhost:5000/${product.image}`} alt="" className={classes.imgInner}/>
                </div>*/}
                <CardContent className={classes.cardContent}>
                  <Typography variant="subtitle1">
                    Price: ₸{product.price}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                  </Typography>
                  <Typography>
                    {product.description}
                  </Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                  <Button size="medium" color="primary" variant="text" component={RouterLink}
                          to={`/shop/${product.id}`}>
                    View
                  </Button>
                  {productAction(product)}
                  {/*<Button size="medium" color="secondary" variant="contained" startIcon={<RemoveShoppingCartRoundedIcon/>}*/}
                  {/*        onClick={handleRemove}>*/}
                  {/*  Remove*/}
                  {/*</Button>*/}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Footer/>
      </Container>
    </React.Fragment>
  );
});

export default Shop;