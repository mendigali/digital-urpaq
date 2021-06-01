import React from 'react';
import { useParams } from 'react-router-dom';
import VacancyCardFull from '../components/VacancyCardFull';
import vacancies from '../data/vacancy.json';
import Container from '@material-ui/core/Container';
import Footer from '../components/Footer';

const Vacancies = () => {
  let { id } = useParams();
  let [vacancy] = vacancies.filter(vacancy => vacancy.id === parseInt(id));
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