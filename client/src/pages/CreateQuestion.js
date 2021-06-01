import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Card, CardContent } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { Controller, useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import {QuestionAPI} from '../http';
import { Context } from '../App';
import { Redirect } from 'react-router-dom';

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

const labels = {
  0.5: 'Beginner',
  1: 'Very easy',
  1.5: 'Easy',
  2: 'Normal',
  2.5: 'Average',
  3: 'Medium',
  3.5: 'Difficult',
  4: 'Hard',
  4.5: 'Very hard',
  5: 'Insane',
};

const CreateQuestion = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [hover, setHover] = useState(-1);
  const [questionCreated, setQuestionCreated] = useState(-1);
  const { control, handleSubmit } = useForm();
  const { userStore } = useContext(Context);

  const addQuestion = async (data) => {
    const newQuestion = await QuestionAPI.create(userStore.user.id, data);
    setQuestionCreated(newQuestion.data.id);
  };

  if (questionCreated > 0) {
    return <Redirect to={`/questions/${questionCreated}`}/>;
  }

  return (
    <main className={classes.layout}>
      <Card className={classes.paper}>
        <CardContent>
          <form noValidate onSubmit={handleSubmit(addQuestion)}>
            <Typography variant="h6" align="center" gutterBottom>
              Ask a new question
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography component="legend">
                  Question difficulty: {labels[hover !== -1 ? hover : value]}
                </Typography>
                <Controller
                  name="difficulty"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Rating
                      value={value}
                      precision={0.5}
                      size="large"
                      onChange={onChange}
                      /*onChange={(event, newValue) => {
                        setValue(newValue);
                      }}*/
                      onChangeActive={(event, newHover) => {
                        setHover(newHover);
                      }}
                    />
                  )}
                  rules={{ required: 'Question title cannot be empty!' }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.title}>
              <Grid item xs={12}>
                <Controller
                  name="title"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      id="Title"
                      label="Question title"
                      value={value}
                      onChange={onChange}
                      fullWidth
                      autoComplete="Title"
                    />
                  )}
                  rules={{ required: 'Question title cannot be empty!' }}
                />
              </Grid>
            </Grid>
            <Controller
              name="text"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="text"
                  label="Question description"
                  style={{ marginBottom: 20, marginTop: 10 }}
                  multiline
                  rows={6}
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
              rules={{ required: 'Question description cannot be empty!' }}
            />
            <Button variant="contained" color="primary" type="submit">
              Ask a question
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
};

export default CreateQuestion;