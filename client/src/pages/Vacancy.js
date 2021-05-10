import React from 'react';
import { useParams } from 'react-router-dom';
import { CssBaseline } from "@material-ui/core";
import VacancyCardFull from '../components/VacancyCardFull';
import vacancies from "../data/vacancy.json";
import Container from "@material-ui/core/Container";

export default function Vacancies() {
  let {id} = useParams();
  let [vacancy] = vacancies.filter(vacancy => vacancy.id === parseInt(id));
  return (
    <React.Fragment>
      <CssBaseline/>
      <Container maxWidth="md">
        <VacancyCardFull
          key={id}
          title={vacancy.title}
          body={vacancy.body}
          date={vacancy.date}
          username={vacancy.username}
          salary={vacancy.salary}
        />
      </Container>
    </React.Fragment>
  );
}