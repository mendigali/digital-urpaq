import React from "react";
import { Card, CardContent, Divider } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Answer from "./Answer";
import SimpleAnswerEditor from "./SimpleAnswerEditor";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 250,
    marginTop: 20
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
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  body: {
    padding: 20
  },
  answersAmount: {
    marginTop: 30,
    marginBottom: 10
  },
  questionBody: {
    marginBottom: 30
  }
}));

export default function QuestionCardSmall(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} key={props.id}>
      <CardContent>
        <div className={classes.header}>
          <Rating name="size-small" defaultValue={props.rating} precision={0.5} size="small" readOnly/>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {props.date}
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
        <div className={classes.body}>
          <Typography paragraph className={classes.questionBody}>
            {props.body}
          </Typography>
          <Divider/>
          <Typography variant="h5" className={classes.answersAmount}>
            Answers: {props.amountOfAnswers}
          </Typography>
          {
            props.answers.map(({id, username, body, date}) => (
              <>
                <Answer
                  key={id}
                  username={username}
                  body={body}
                  date={date}
                />
                <Divider/>
              </>
            ))
          }
          <Typography variant="h5" className={classes.answersAmount}>
            Your answer:
          </Typography>
          <SimpleAnswerEditor/>
        </div>
      </CardContent>
    </Card>
  );
};