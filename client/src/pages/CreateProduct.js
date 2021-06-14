import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Card, CardContent, InputAdornment } from '@material-ui/core';
import { Controller, useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import { ShopAPI } from '../http';
import { Context } from '../App';
import { Redirect } from 'react-router-dom';
import { DropzoneArea } from 'material-ui-dropzone';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),

    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),

    }
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  title: {
    marginBottom: 20
  }
}));


const CreateProduct = () => {
  const classes = useStyles();
  const [productsCreated, setProductsCreated] = useState(-1);
  const { control, handleSubmit } = useForm();
  const { userStore } = useContext(Context);
  const [img, setImg] = useState(null);
  const [err, setErr] = useState('');

  const addProducts = async (data) => {
    console.log(data);
    let formData = new FormData();
    Object.keys(data).forEach((key, index) => {
      formData.append(key, data[key]);
    });
    formData.append('img', img);
    formData.append('is_available', 'true');
    const newProduct = await ShopAPI.create(userStore.user.id, formData);
    if (newProduct.success) {
      setProductsCreated(newProduct.data.id);
    } else {
      setErr(newProduct.errors);
    }
  };
  if (productsCreated > 0) {
    return <Redirect to={`/shop/${productsCreated}`}/>;
  }

  return (
    <main className={classes.layout}>
      <Card className={classes.paper}>
        <CardContent>
          <form noValidate onSubmit={handleSubmit(addProducts)}>
            <Typography variant="h6" align="center" gutterBottom>
              Create a new product
            </Typography>
            {err.length > 1 &&
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              {err.join('\n')}
            </Alert>
            }
            <Grid container spacing={2} className={classes.title}>
              <Grid item xs={12}>
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      id="Title"
                      label="Product title"
                      value={value}
                      onChange={onChange}
                      fullWidth
                      autoComplete="Title"
                    />
                  )}
                  rules={{ required: 'Product title cannot be empty!' }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.title}>
              <Grid item xs={12}>
                <Controller
                  name="price"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      id="Price"
                      label="Product price"
                      value={value}
                      onChange={onChange}
                      fullWidth
                      autoComplete="Price"
                      InputProps={{
                        startAdornment: <InputAdornment position="start">₸</InputAdornment>,
                      }}
                    />
                  )}
                  rules={{ required: 'Product price cannot be empty!' }}
                />
              </Grid>
            </Grid>

            <Controller
              name="description"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="text"
                  label="Product description"
                  style={{ marginBottom: 20, marginTop: 10 }}
                  multiline
                  rows={6}
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
              rules={{ required: 'Product description cannot be empty!' }}
            />
            <Grid>
              <Controller
                name="img"
                control={control}
                render={() => (
                  <DropzoneArea
                    acceptedFiles={['image/*']}
                    dropzoneText={'Drag and drop an image here or click'}
                    onChange={(files) => setImg(files[0])}
                    filesLimit={1}
                  />
                )}
              />
            </Grid>

            <Button variant="contained" color="primary" type="submit" style={{ marginTop: 20 }}>
              Create a product
            </Button>

          </form>
        </CardContent>
      </Card>
    </main>
  );
};

export default CreateProduct;