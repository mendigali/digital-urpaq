import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import QuestionCardFull from '../components/QuestionCardFull';
import Container from '@material-ui/core/Container';
import { getOneQuestion } from '../http/questionAPI';
import { getAnswersByQuestionId } from '../http/answerAPI';

const Question = () => {
  const { id } = useParams();

  const [question, setQuestion] = useState({});

  const getQuestion = async () => {
    const questionFound = await getOneQuestion(id);
    const answers = await getAnswersByQuestionId(id);
    questionFound.data.answers = answers.data;
    questionFound.data.amountOfAnswers = answers.amount;
    setQuestion(questionFound.data);
  };

  useEffect(getQuestion, []);

  return (
    <React.Fragment>
      <Container maxWidth="md">
        <QuestionCardFull
          key={question.id}
          title={question.title}
          body={question.text}
          date={question.created_at}
          rating={question.difficulty}
          amountOfAnswers={question.amountOfAnswers}
          answers={question.answers}
        />
      </Container>
    </React.Fragment>
  );
};

export default Question;