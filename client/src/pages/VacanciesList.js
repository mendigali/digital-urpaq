import React, { useContext, useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import VacancyCreate from '../components/VacancyCreate';
import VacancyCardSmall from '../components/VacancyCardSmall';
import { observer } from 'mobx-react-lite';
import { Context } from '../App';
import Footer from '../components/Footer';
import { VacancyAPI } from '../http';
import { LinearProgress } from '@material-ui/core';

const VacanciesList = observer(() => {
  const { vacancyStore, userStore } = useContext(Context);
  const [loading, setLoading] = useState(true);

  const getVacancies = async () => {
    let vacanciesFromDB = await VacancyAPI.getAll();
    vacancyStore.setVacancies(vacanciesFromDB.data);
    setLoading(false);
  };

  useEffect(getVacancies, []);

  return (loading ? <LinearProgress color="secondary"/> :
    <Container maxWidth="md">
      {userStore.isAuth === true && <VacancyCreate/>}
      {
        vacancyStore.vacancies
          .map(({
                  id,
                  title,
                  date,
                  salary_min,
                  salary_max,
                  location,
                  is_remote,
                  is_fulltime,
                  description
                }) => (
            <VacancyCardSmall
              key={id}
              id={id}
              title={title}
              date={date}
              salary_min={salary_min}
              salary_max={salary_max}
              is_remote={is_remote}
              is_fulltime={is_fulltime}
              location={location}
              description={description}
            />
          ))
      }
      <Footer/>
    </Container>
  );
});

export default VacanciesList;
