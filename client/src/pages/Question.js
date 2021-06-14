import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { AnswerAPI, QuestionAPI } from '../http';
import { Card, CardContent, Divider, LinearProgress } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Moment from 'react-moment';
import Answer from '../components/Answer';
import { Controller, useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Context } from '../App';
import { observer } from 'mobx-react-lite';
import Footer from '../components/Footer';

const useStyles = makeStyles({
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
});

const Question = observer(() => {
  const classes = useStyles();

  const { id } = useParams();

  const [question, setQuestion] = useState({});
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);

  const { control, handleSubmit, reset } = useForm();
  const { userStore } = useContext(Context);

  const getQuestion = async () => {
    const questionFound = await QuestionAPI.getOne(id);
    const answersFound = await AnswerAPI.getByQuestionId(id);
    setAnswers(answersFound.data);
    setQuestion(questionFound.data);
    setLoading(false);
  };

  const addAnswer = async (data) => {
    const user_id = userStore.user.id;
    const question_id = id;
    const { text } = data;
    const newAnswer = await AnswerAPI.create({ user_id, question_id, text });
    setAnswers([...answers, newAnswer.data]);
    reset({
      text: ''
    });
  };

  useEffect(getQuestion, []);

  return (loading ? <LinearProgress color="secondary"/> :
    <Container maxWidth="md">
      <Card className={classes.root}>
        <CardContent>
          <div className={classes.header}>
            <Rating value={parseFloat(question.difficulty)} precision={0.5} size="small" readOnly/>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              <Moment format="HH:mm DD/MM/YYYY" children={question.created_at}/>
            </Typography>
          </div>
          <div className={classes.header}>
            <Typography variant="h5" component="h2" children={question.title}/>
            <div className="answers">
              <Typography variant="h5" align="center" children={answers.length}/>
              <Typography variant="body1" align="center" children={'answers'}/>
            </div>
          </div>
          <Typography paragraph className={classes.questionBody} children={question.text}/>
          <Divider/>
          <Typography variant="h5" className={classes.answersAmount}>
            Answers: {answers.length}
          </Typography>
          {
            answers && answers.map(({ id, username, text, created_at }) => (
              <>
                <Answer
                  key={id}
                  username={username}
                  body={text}
                  date={created_at}
                />
                <Divider/>
              </>
            ))
          }
          {userStore.isAuth && (<>
            <Typography variant="h5" className={classes.answersAmount} children={'Your answer:'}/>
            <form noValidate onSubmit={handleSubmit(addAnswer)}>
              <Controller
                name="text"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Your answer"
                    style={{ marginBottom: 20, marginTop: 10 }}
                    multiline
                    rows={6}
                    value={value}
                    onChange={onChange}
                  />
                )}
                rules={{ required: 'Answer cannot be empty!' }}
              />
              <Button variant="contained" color="primary" type="submit" children={'Submit answer'}/>
            </form>
          </>)}
        </CardContent>
      </Card>
      <Footer/>
    </Container>
  );
});

export default Question;