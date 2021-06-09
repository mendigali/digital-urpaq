import React, { useContext, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { Context } from '../App';
import { observer } from 'mobx-react-lite';
import Footer from '../components/Footer';
import { NewsAPI } from '../http';
import PostCard from '../components/PostCard';
import NewsCreate from '../components/NewsCreate';
const PostsList = observer(() => {
  const { newsStore, userStore } = useContext(Context);

  const getPosts = async () => {
    let posts = await NewsAPI.getAll();
    newsStore.setPosts(posts.data);
  };

  useEffect(getPosts, []);

  return (
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