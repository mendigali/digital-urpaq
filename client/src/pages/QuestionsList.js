import React, { useContext, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import QuestionCard from '../components/QuestionCard';
import { Context } from '../App';
import { observer } from 'mobx-react-lite';
import Footer from '../components/Footer';
import QuestionCreate from '../components/QuestionCreate';
import { AnswerAPI, QuestionAPI } from '../http';

const QuestionsList = observer(() => {
  const { questionStore, userStore } = useContext(Context);

  const getQuestions = async () => {
    let questionsFromDb = await QuestionAPI.getAll();
    for (let question of questionsFromDb.data) {
      const answers = await AnswerAPI.getByQuestionId(question.id);
      question.answers = answers.data;
      question.amountOfAnswers = answers.amount;
    }
    questionStore.setQuestions(questionsFromDb.data);
  };

  useEffect(getQuestions, []);

  return (
    <Container maxWidth="md">
      {userStore.isAuth === true && <QuestionCreate/>}
      {
        questionStore.questions.map(({ id, title, created_at, difficulty, amountOfAnswers }) => (
          <QuestionCard
            key={id}
            id={id}
            title={title}
            date={created_at}
            rating={difficulty}
            amountOfAnswers={amountOfAnswers}
          />
        ))
      }
      <Footer/>
    </Container>
  );
});

export default QuestionsList;