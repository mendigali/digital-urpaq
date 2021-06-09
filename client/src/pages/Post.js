import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { NewsAPI } from '../http';
import { Card, CardContent, Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Moment from 'react-moment';
import { makeStyles } from '@material-ui/core/styles';
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
  }
});

const Question = observer(() => {
  const classes = useStyles();

  const { id } = useParams();

  const [post, setPost] = useState({});

  const getPost = async () => {
    const postFromDb = await NewsAPI.getOne(id);
    setPost(postFromDb.data);
  };

  useEffect(getPost, []);

  return (post &&
    <Container maxWidth="md">
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            <Moment format="HH:mm DD/MM/YYYY" children={post.created_at}/>
          </Typography>
          <Typography variant="h5" component="h2" children={post.title} gutterBottom/>
          <Typography style={{whiteSpace: 'pre-wrap'}} paragraph children={post.content}/>
        </CardContent>
      </Card>
      <Footer/>
    </Container>
  );
});

export default Question;