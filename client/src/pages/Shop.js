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
import BackgroundImage from '../assets/charles-deluvio-FK81rxilUXg-unsplash.jpg';
import { Paper } from '@material-ui/core';
import { ShopAPI } from '../http';
import { Context } from '../App';
import { observer } from 'mobx-react-lite';
import Footer from '../components/Footer';
import { Link as RouterLink } from 'react-router-dom';
import TrendingFlatRoundedIcon from '@material-ui/icons/TrendingFlatRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import OpenInNewRoundedIcon from '@material-ui/icons/OpenInNewRounded';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    backgroundImage: `url(${BackgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto 100vw',
    // padding: theme.spacing(8, 0, 6),
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
    // filter: 'blur(3px)'
  },
  heroButtons: {
    marginTop: theme.spacing(4),
    opacity: '1.0'
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
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
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
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

  const { shopStore } = useContext(Context);

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
          <Paper elevation={10} style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: 20 }}>
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
      <Container className={classes.cardGrid} maxWidth="md" ref={myRef}>
        <Grid container spacing={4}>
          {shopStore.products.map((product) => (
            <Grid item key={product} xs={12} sm={6} md={4} id={product.id}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={`http://localhost:5000/${product.image}`}
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
                  <Button size="small" color="primary" variant="outlined" component={RouterLink}
                          to={`/shop/${product.id}`} startIcon={<OpenInNewRoundedIcon/>}>
                    View
                  </Button>
                  <Button size="small" color="primary" variant="contained" startIcon={<ShoppingCartRoundedIcon/>}>
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