import React from 'react';
import { useParams } from 'react-router-dom';
import { CssBaseline } from "@material-ui/core";
import QuestionCardFull from '../components/QuestionCardFull';
import questions from "../data/question.json";
import Container from "@material-ui/core/Container";

export default function Question() {
  let {id} = useParams();
  let [question] = questions.filter(question => question.id === parseInt(id));
  return (
    <React.Fragment>
      <CssBaseline/>
      <Container maxWidth="md">
        <QuestionCardFull
          key={id}
          title={question.title}
          body={question.body}
          date={question.date}
          rating={question.rating}
          amountOfAnswers={question.amountOfAnswers}
          answers={question.answers}
        />
      </Container>
    </React.Fragment>
  );
}