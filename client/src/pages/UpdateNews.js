import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Card, CardContent, LinearProgress } from '@material-ui/core';
import { Controller, useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import {NewsAPI} from '../http';
import { Context } from '../App';
import { Redirect, useParams } from 'react-router-dom';

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


const UpdateNews = () => {
  const { id } = useParams();
  const classes = useStyles();
  const [newsUpdated, setNewsUpdated] = useState(false);
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const { control, handleSubmit } = useForm();
  const { userStore } = useContext(Context);

  const updateNews = async (data) => {
    const newNews = await NewsAPI.update(userStore.user.id, data);
    setNewsUpdated(newNews.success);
  };

  const getPost = async () => {
    const postFromDb = await NewsAPI.getOne(id);
    setPost(postFromDb.data);
    setLoading(false);
  };

  useEffect(getPost, []);

  if (newsUpdated) {
    return <Redirect to={`/news/${id}`}/>;
  }

  return (loading ? <LinearProgress color="secondary"/> :
    <main className={classes.layout}>
      <Card className={classes.paper}>
        <CardContent>
          <form noValidate onSubmit={handleSubmit(updateNews)}>
            <Typography variant="h6" align="center" gutterBottom>
              Update post
            </Typography>
            <Grid container spacing={2} className={classes.title}>
              <Grid item xs={12}>
                <Controller
                  name="title"
                  control={control}
                  defaultValue={post.title}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      id="title"
                      label="Post title"
                      value={value}
                      onChange={onChange}
                      fullWidth
                      autoComplete="title"
                    />
                  )}
                  rules={{ required: 'Post title cannot be empty!' }}
                />
              </Grid>
            </Grid>
            <Controller
              name="content"
              control={control}
              defaultValue={post.content}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="content"
                  label="Post description"
                  style={{ marginBottom: 20, marginTop: 10 }}
                  multiline
                  rows={6}
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
              rules={{ required: 'Post description cannot be empty!' }}
            />
            <Button variant="contained" color="primary" type="submit">
              Update a post
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
};

export default UpdateNews;