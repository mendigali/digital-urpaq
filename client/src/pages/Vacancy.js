import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Footer from '../components/Footer';
import { VacancyAPI } from '../http';
import { Box, Card, CardContent, LinearProgress } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Moment from 'react-moment';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 250,
    marginTop: 20,
    padding: 20
  }
}));

const Vacancies = () => {
  const classes = useStyles();
  const { id } = useParams();

  const [vacancy, setVacancy] = useState({});
  const [loading, setLoading] = useState(true);

  const getQuestion = async () => {
    const { data } = await VacancyAPI.getOne(id);
    setVacancy(data);
    setLoading(false)
  };

  useEffect(getQuestion, []);

  return (loading ? <LinearProgress color="secondary"/> :
    <Container maxWidth="md">
      <Card className={classes.root}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            <Moment format="HH:mm DD/MM/YYYY">
              {vacancy.updated_at}
            </Moment>
          </Typography>
          <Typography variant="h4" gutterBottom>
            {vacancy.title}
          </Typography>
          <Box display="flex" flexWrap="wrap" justifyContent="space-between">
            <Typography variant="h5" color="textSecondary" gutterBottom>
              {vacancy.is_remote ? 'Remote' : vacancy.location}
            </Typography>
            <Typography variant="h5" color="textSecondary" gutterBottom>
              {`₸${vacancy.salary_min}-${vacancy.salary_max}`}
            </Typography>
          </Box>
          <Typography variant="body1" style={{ whiteSpace: 'pre-wrap' }} gutterBottom>
            {vacancy.description}
          </Typography>
        </CardContent>
      </Card>
      <Footer/>
    </Container>
  );
};

export default Vacancies;