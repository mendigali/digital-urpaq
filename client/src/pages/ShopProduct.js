import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { useParams } from 'react-router-dom';
import { Button, CardActions, Container, Divider } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { getOneProduct } from '../http/shopAPI';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: 30,
    height: '50vh'
  },
  details: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: 10
  },
  content: {
    // flex: '1 0 auto',
    /*display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'*/
    flexGrow: 1
  },
  cover: {
    width: 400,
  },
  controls: {
    display: 'flex',
    alignItems: 'center'
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  button: {
    textDecoration: 'none'
  },
  header: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'space-between'
  },
  divider: {
    marginTop: 10,
    marginBottom: 10
  }
}));

const ShopProduct = () => {
  const classes = useStyles();

  const { id } = useParams();

  const history = useHistory();

  const [product, setProduct] = useState({});

  const getProduct = async () => {
    const productFound = await getOneProduct(id);
    setProduct(productFound.data);
  };

  useEffect(getProduct, []);

  return (
    <Container maxWidth="lg">
      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image={`http://localhost:5000/${product.image}`}
          title="Live from space album cover"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <div className={classes.header}>
              <Typography variant="h4">
                {product.name}
              </Typography>
              <Typography variant="h4">
                ₸{product.price}
              </Typography>
            </div>
            <Divider className={classes.divider}/>
            <Typography variant="body1">
              {product.description}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => history.goBack()}
              startIcon={<KeyboardBackspaceIcon/>}
            >
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<AddShoppingCartIcon/>}
            >
              Add to Cart
            </Button>
          </CardActions>
        </div>
      </Card>
    </Container>
  );
};

export default ShopProduct;