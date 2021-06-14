import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Card, CardContent, LinearProgress } from '@material-ui/core';
import { Controller, useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import { Context } from '../App';
import { Redirect } from 'react-router-dom';
import { UserAPI } from '../http';

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


const UpdatePersonal = () => {
  const classes = useStyles();
  const [added, setAdded] = useState(false);
  const { control, handleSubmit } = useForm();
  const { userStore } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState({});


  const getInfo = () => {
    console.log("Update page...")
    setInfo(userStore.user.personal);
    setLoading(false);
  }

  const updatePersonal = async (data) => {
    console.log(data);
    const personal = await UserAPI.update(userStore.user.id, data);
    console.log(personal);
    if (personal.success) {
      userStore.user.personal = data;
      localStorage.setItem('user', JSON.stringify(userStore.user));
      setAdded(true);
    }
  };

  useEffect(getInfo, []);

  if (added) {
    return <Redirect to={`/profile`}/>;
  }

  return (loading ? <LinearProgress color="secondary"/> :
    <main className={classes.layout}>
      <Card className={classes.paper}>
        <CardContent>
          <form noValidate onSubmit={handleSubmit(updatePersonal)}>
            <Typography variant="h6" align="center" gutterBottom>
              Update personal information
            </Typography>
            <Grid container spacing={2} className={classes.title}>
              <Grid item xs={12}>
                <Controller
                  name="first_name"
                  control={control}
                  defaultValue={info.first_name}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      label="First name"
                      value={value}
                      onChange={onChange}
                      fullWidth
                      autoComplete="title"
                    />
                  )}
                  rules={{ required: 'First name cannot be empty' }}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="second_name"
                  control={control}
                  defaultValue={info.second_name}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      label="Second name"
                      value={value}
                      onChange={onChange}
                      fullWidth
                      autoComplete="title"
                    />
                  )}
                  rules={{ required: 'Second name cannot be empty' }}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="middle_name"
                  control={control}
                  defaultValue={info.middle_name}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      label="Middle name"
                      value={value}
                      onChange={onChange}
                      fullWidth
                      autoComplete="title"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="date_of_birth"
                  control={control}
                  defaultValue={new Date(info.date_of_birth)}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      id="date"
                      label="Birthday"
                      type="date"
                      value={value}
                      onChange={onChange}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  )}
                />
              </Grid>
            </Grid>
            <Button variant="contained" color="primary" type="submit">
              Update
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
};

export default UpdatePersonal;