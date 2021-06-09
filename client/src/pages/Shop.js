import React, { useContext, useEffect, useRef } from 'react';
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
import { Paper } from '@material-ui/core';
import { ShopAPI } from '../http';
import { Context } from '../App';
import { observer } from 'mobx-react-lite';
import Footer from '../components/Footer';
import { Link as RouterLink } from 'react-router-dom';
import TrendingFlatRoundedIcon from '@material-ui/icons/TrendingFlatRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';

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

  const { shopStore, themeStore } = useContext(Context);

  const getProducts = async () => {
    const response = await ShopAPI.getAllProducts();
    if (response.success) {
      shopStore.setProducts(response.data);
    }
  };

  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth' });

  useEffect(getProducts, []);

  return (
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
                <Grid item>
                <Button variant="contained" color="primary" size={'large'} component={RouterLink} to={`/product-create`}>
                    Create products
                  </Button>
                  </Grid>
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
          {shopStore.products.map(({id, image, name, description, price}) => (
            <Grid item key={id} xs={12} sm={6} md={4} id={id}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={`http://localhost:7000/${image}`}
                  title={name}
                />
                {/*<div className={classes.imgOuter}>
                  <img src={`http://localhost:5000/${product.image}`} alt="" className={classes.imgInner}/>
                </div>*/}
                <CardContent className={classes.cardContent}>
                  <Typography variant="subtitle1">
                    Price: ₸{price}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2">
                    {name}
                  </Typography>
                  <Typography>
                    {description}
                  </Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                  <Button size="medium" color="primary" variant="text" component={RouterLink}
                          to={`/shop/${id}`}>
                    View
                  </Button>
                  <Button size="medium" color="primary" variant="contained" startIcon={<ShoppingCartRoundedIcon/>}>
                    Buy
                  </Button>
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