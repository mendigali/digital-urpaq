import React, { useContext, useState } from 'react';
import AuthErrors from './AuthErrors';
import { Controller, useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import { Context } from '../App';
import { UserAPI } from '../http';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginForm = () => {
  const classes = useStyles();

  const { control, handleSubmit } = useForm();
  const [loginErrors, setLoginErrors] = useState([]);

  const { userStore } = useContext(Context);

  const signIn = async (data) => {
    const user = await UserAPI.login(data);
    if (!user.success) {
      userStore.setIsAuth(false);
      userStore.setUser({});
      setLoginErrors(user.errors);
    } else {
      userStore.setIsAuth(true);
      userStore.setUser(user.data);
      localStorage.setItem('user', JSON.stringify(user.data));
    }
  };

  return (
    <form className={classes.form} noValidate onSubmit={handleSubmit(signIn)}>
      {loginErrors.length > 0 && <AuthErrors errors={loginErrors}/>}
      <Controller
        name="username"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            autoComplete="username"
            autoFocus
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
          />
        )}
        rules={{ required: 'Username required' }}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
          />
        )}
        rules={{ required: 'Password required' }}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Sign In
      </Button>
      <Grid container justify="flex-end">
        <Grid item>
          <Link component={RouterLink} variant="body2" to="/signup">
            Don't have an account? Sign Up
          </Link>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;