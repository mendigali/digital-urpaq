import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 20,
  },
  icon: {
    fontSize: 50,
    color: '#b0c4de',
    marginRight: 20,
  }
});

const VacancyCreate = () => {
  const classes = useStyles();

  return (
    <Link color="textPrimary" variant="h5" underline="none" component={RouterLink} to={`/question-create`}>
      <Card className={classes.root}>
        <CardContent style={{ display: 'flex', }}>
          <AddCircleIcon className={classes.icon}/>
          <Typography variant="h5" component="h2" style={{ marginTop: 12 }}>
            Ask a new question
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default VacancyCreate;