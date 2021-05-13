import React, { useContext } from 'react';
import Container from '@material-ui/core/Container';
import VacancyCreate from '../components/VacancyCreate';
import VacancyCardSmall from '../components/VacancyCardSmall';
import vacancies from '../data/vacancy.json';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import Footer from '../components/Footer';

const VacanciesList = observer(() => {
  const { userStore } = useContext(Context);
  return (
    <React.Fragment>
      <Container maxWidth="md">
        {userStore.isAuth === true && <VacancyCreate/>}
        {
          vacancies.map(({ id, title, date, salary, username }) => (
            <VacancyCardSmall
              key={id}
              id={id}
              title={title}
              date={date}
              salary={salary}
              username={username}
            />
          ))
        }
        <Footer/>
      </Container>
    </React.Fragment>
  );
});

export default VacanciesList;
