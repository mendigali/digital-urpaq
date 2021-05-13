import React from 'react';
import Typography from '@material-ui/core/Typography';
import ReactMarkdown from 'react-markdown';
import { makeStyles } from '@material-ui/core/styles';
import Moment from 'react-moment';

const useStyles = makeStyles({
  title: {
    fontSize: 14,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  answer: {
    marginTop: 20
  },
  body: {
    fontSize: '1rem'
  }
});

const Answer = props => {
  const classes = useStyles();
  return (
    <div className={classes.answer} key={props.key}>
      <div className={classes.header}>
        <Typography variant="h6">
          {props.username}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          <Moment format="HH:mm DD/MM/YYYY">
            {props.date}
          </Moment>
        </Typography>
      </div>
      <ReactMarkdown className={classes.body}>
        {props.body}
      </ReactMarkdown>
    </div>
  );
};

export default Answer;