import React, { useContext, useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import { Context } from '../App';
import { observer } from 'mobx-react-lite';
import Footer from '../components/Footer';
import { NewsAPI } from '../http';
import PostCard from '../components/PostCard';
import NewsCreate from '../components/NewsCreate';
import { LinearProgress } from '@material-ui/core';
const PostsList = observer(() => {
  const { newsStore, userStore } = useContext(Context);
  const [loading, setLoading] = useState(true);

  const getPosts = async () => {
    let posts = await NewsAPI.getAll();
    newsStore.setPosts(posts.data);
    setLoading(false);
  };

  useEffect(getPosts, []);

  return (loading ? <LinearProgress color="secondary"/> :
    <Container maxWidth="md">
      {userStore.isAuth === true && <NewsCreate/>}
      {
        newsStore.posts.map(({ id, title, created_at }) => (
          <PostCard
            key={id}
            id={id}
            title={title}
            date={created_at}
          />
        ))
      }
      <Footer/>
    </Container>
  );
});

export default PostsList;