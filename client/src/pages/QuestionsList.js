import React, { useContext, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import QuestionCardSmall from '../components/QuestionCardSmall';
import { getAllQuestions } from '../http/questionAPI';
import { getAnswersByQuestionId } from '../http/answerAPI';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import Footer from '../components/Footer';

const QuestionsList = observer(() => {
  const { questionStore } = useContext(Context);

  const getQuestions = async () => {
    let questionsFromDb = await getAllQuestions();
    for (const question of questionsFromDb.data) {
      const answers = await getAnswersByQuestionId(question.id);
      question.answers = answers.data;
      question.amountOfAnswers = answers.amount;
    }
    questionStore.setQuestions(questionsFromDb.data);
    console.log(questionStore);
  };

  useEffect(getQuestions, []);

  return (
    <React.Fragment>
      <Container maxWidth="md">
        {
          questionStore.questions.map(({ id, title, created_at, difficulty, amountOfAnswers }) => (
            <QuestionCardSmall
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
    </React.Fragment>
  );
});

export default QuestionsList;
