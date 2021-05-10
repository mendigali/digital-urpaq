import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import VacancyCreate from "../components/VacancyCreate";
import VacancyCardSmall from "../components/VacancyCardSmall";
import vacancies from "../data/vacancy.json";

export default function VacanciesList() {
  return (
    <React.Fragment>
      <CssBaseline/>
      <Container maxWidth="md">
          <VacancyCreate/>        
        {
          vacancies.map(({id, title, date, salary, username}) => (
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
      </Container>
    </React.Fragment>
  );
}
