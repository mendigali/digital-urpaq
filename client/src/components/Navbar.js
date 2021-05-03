import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { ButtonGroup } from "@material-ui/core";

const useStyles = makeStyles({
  menuButton: {
    color: '#fff',
  },
  title: {
    flexGrow: 1,
  },
  menuItems: {
    display: 'flex',
    justifyContent: 'start',
    marginLeft: 50
  }
});

export default function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Digital Urpaq
        </Typography>
        <Button
          className={classes.menuButton}
          component={Link}
          to="/questions">
          Questions
        </Button>
        <ButtonGroup variant="text" color="primary" className={classes.menuButton}>
          <Button
            className={classes.menuButton}
            component={Link}
            to="/signin">
            Sign In
          </Button>
          <Button
            className={classes.menuButton}
            component={Link}
            to="/signup">
            Sign Up
          </Button>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
}