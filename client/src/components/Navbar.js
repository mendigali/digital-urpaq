import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { authOnlyRoutes, publicAndAuthRoutes, publicOnlyRoutes } from '../utils/routes';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';

const useStyles = makeStyles({
  menuButton: {
    color: '#fff',
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none',
    color: '#fff'
  },
  menuItems: {
    display: 'flex',
    justifyContent: 'start',
    marginLeft: 50
  }
});

const Navbar = observer(() => {
  const classes = useStyles();

  const { userStore } = useContext(Context);

  const logout = () => {
    localStorage.removeItem('user');
    window.location.reload();
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title} component={Link} to="/shop">
          Digital Urpaq
        </Typography>
        {publicAndAuthRoutes.map(({ navbarDisplay, navbarName, path }) =>
          navbarDisplay &&
          <Button
            className={classes.menuButton}
            component={Link}
            to={path}>
            {navbarName}
          </Button>
        )}
        {userStore.isAuth === false && publicOnlyRoutes.map(({ navbarDisplay, navbarName, path }) =>
          navbarDisplay &&
          <Button
            className={classes.menuButton}
            component={Link}
            to={path}>
            {navbarName}
          </Button>
        )}
        {userStore.isAuth === true && authOnlyRoutes.map(({ navbarDisplay, navbarName, path }) =>
          navbarDisplay &&
          <Button
            className={classes.menuButton}
            component={Link}
            to={path}>
            {navbarName}
          </Button>
        )}
        {userStore.isAuth === true &&
        <Button style={{marginLeft: 20}} color={'secondary'} variant={'contained'} onClick={logout}>
          Logout
        </Button>
        }
      </Toolbar>
    </AppBar>
  );
});

export default Navbar;