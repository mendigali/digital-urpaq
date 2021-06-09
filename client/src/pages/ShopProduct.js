import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { useHistory, useParams } from 'react-router-dom';
import { Button, CardActions, Container, Divider } from '@material-ui/core';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { ShopAPI } from '../http';
import Footer from '../components/Footer';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Redirect } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: 30,
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row'
    }
  },
  details: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: 10
  },
  controls: {
    display: 'flex',
    alignItems: 'center'
  },
  header: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'space-between'
  },
  divider: {
    marginTop: 10,
    marginBottom: 10
  },
  productImgTop: {
    minHeight: '50vh',
    display: 'inline-block',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center'
  },
  productImgLeft: {
    minWidth: '40vh',
    width: '80vh',
    display: 'inline-block',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center'
  }
}));

const ShopProduct = () => {
  const classes = useStyles();

  const { id } = useParams();

  const history = useHistory();

  const [product, setProduct] = useState({});
  const [open, setOpen] = useState(false)
  const getProduct = async () => {
    const productFound = await ShopAPI.getOneProduct(id);
    setProduct(productFound.data);
  };
  const deleteProduct = async () => {
    const productFound = await ShopAPI.deleteOneProduct(id);
    setProduct(productFound.data);
  };
  const handleRequestClose = () => {
    setOpen(false)
  }
  const clickButton = () => {
    setOpen(true)
  }
  useEffect(getProduct, []);
 
  return (
    <Container maxWidth="lg">
      <Card className={classes.root}>
        <CardMedia
          display={{ xs: 'none', md: 'inline-block' }}
          // style={{ width: 500 }}
          className={classes.productImgLeft}
          image={`http://localhost:7000/${product.image}`}
          title="Live from space album cover"
        />
        <CardMedia
          display={{ xs: 'inline-block', md: 'none' }}
          className={classes.productImgTop}
          image={`http://localhost:7000/${product.image}`}
          title="Live from space album cover"
        />
        <div className={classes.details}>
          <CardContent>
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
          <CardActions style={{marginTop: 'auto'}}>
            <Button
              variant="contained"
              color="primary"
              style={{ textDecoration: 'none' }}
              onClick={() => history.goBack()}
              startIcon={<KeyboardBackspaceIcon/>}
            >
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{ textDecoration: 'none' }}
              endIcon={<ShoppingCartRoundedIcon/>}
            >
              Buy
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{ textDecoration: 'none' }}
              endIcon={<EditIcon/>}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{ textDecoration: 'none' }}
              onClick={clickButton}
              endIcon={<DeleteForeverIcon/>}
            >
              Delete
            </Button>
            <Dialog open={open} onClose={handleRequestClose}>
              <DialogTitle>{"Delete "+product.name}</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Confirm to delete your question "{product.name}".
                  </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleRequestClose} color="primary">
                      Cancel
                    </Button>
                    <Button onClick={deleteProduct} color="secondary" autoFocus="autoFocus">
                      Confirm
                      </Button>
                  </DialogActions>
              </Dialog>
          </CardActions>
        </div>
      </Card>
      <Footer/>
    </Container>
  );
};

export default ShopProduct;