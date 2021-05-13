import React, { useContext } from 'react';
import { Card, CardContent, Divider } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Answer from './Answer';
import SimpleAnswerEditor from './SimpleAnswerEditor';
import Moment from 'react-moment';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 250,
    marginTop: 20,
    padding: 20
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
  answersAmount: {
    marginTop: 30,
    marginBottom: 10
  },
  questionBody: {
    marginBottom: 30
  }
}));

const QuestionCardFull = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} key={props.id}>
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
          <Typography variant="h5" component="h2">
            {props.title}
          </Typography>
          <div className="answers">
            <Typography variant="h5" align="center">
              {props.amountOfAnswers}
            </Typography>
            <Typography variant="body1" align="center">
              answers
            </Typography>
          </div>
        </div>
        <Typography paragraph className={classes.questionBody}>
          {props.body}
        </Typography>
        <Divider/>
        <Typography variant="h5" className={classes.answersAmount}>
          Answers: {props.amountOfAnswers}
        </Typography>
        {
          props.answers && props.answers.map(({ id, user_id, text, created_at }) => (
            <>
              <Answer
                key={id}
                username={user_id}
                body={text}
                date={created_at}
              />
              <Divider/>
            </>
          ))
        }
        <Typography variant="h5" className={classes.answersAmount}>
          Your answer:
        </Typography>
        <SimpleAnswerEditor/>
      </CardContent>
    </Card>
  );
};

export default QuestionCardFull;