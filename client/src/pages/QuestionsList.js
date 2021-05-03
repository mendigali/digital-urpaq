import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import QuestionCardSmall from "../components/QuestionCardSmall";
import questions from "../data/question.json";

export default function QuestionsList() {
  return (
    <React.Fragment>
      <CssBaseline/>
      <Container maxWidth="md">
        {
          questions.map(({id, title, date, rating, amountOfAnswers}) => (
            <QuestionCardSmall
              key={id}
              id={id}
              title={title}
              date={date}
              rating={rating}
              amountOfAnswers={amountOfAnswers}
            />
          ))
        }
      </Container>
    </React.Fragment>
  );
}
