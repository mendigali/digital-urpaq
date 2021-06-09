import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import VacancyCardFull from '../components/VacancyCardFull';
import Container from '@material-ui/core/Container';
import Footer from '../components/Footer';
import { VacancyAPI } from '../http';

const Vacancies = () => {
  const { id } = useParams();

  const [vacancy, setVacancy] = useState({});

  const getQuestion = async () => {
    const { data } = await VacancyAPI.getOne(id);
    setVacancy(data);
  };

  return (
    <Container maxWidth="md">
      <VacancyCardFull
        key={id}
        title={vacancy.title}
        body={vacancy.body}
        date={vacancy.date}
        username={vacancy.username}
        salary={vacancy.salary}
      />
      <Footer/>
    </Container>
  );
};

export default Vacancies;