import React from 'react';
import { Card, CardActions, CardContent } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Moment from 'react-moment';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 250,
    marginTop: 20,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  answers: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
}));

const QuestionCardSmall = props => {
  const classes = useStyles();

  return (
    <Card className={classes.root} key={props.key}>
      <CardContent>
        <div className={classes.header}>
          <Rating name="size-small" defaultValue={props.rating} precision={0.5} size="small" readOnly/>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            <Moment format="HH:mm DD/MM/YYYY">
              {props.date}
            </Moment>
          </Typography>
        </div>
        <div className={classes.header}>
          <Link color="textPrimary" variant="h5" component={RouterLink}
                to={`/questions/${props.id}`}>{props.title}</Link>
          <div className="answers">
            <Typography variant="h5" align="center">
              {props.amountOfAnswers}
            </Typography>
            <Typography variant="body1" align="center">
              answers
            </Typography>
          </div>
        </div>
      </CardContent>
      <CardActions>
        <Button
          component={RouterLink}
          to={`/questions/${props.id}`}
        >
          View answers
        </Button>
      </CardActions>
    </Card>
  );
};

export default QuestionCardSmall;