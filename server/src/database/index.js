const Connection = require('./Connection');
const UserQuery = require('./UserQuery');
const QuestionQuery = require('./QuestionQuery');
const AnswerQuery = require('./AnswerQuery');
const VacancyQuery = require('./VacancyQuery');

module.exports = {
  User: new UserQuery(Connection),
  Question: new QuestionQuery(Connection),
  Answer: new AnswerQuery(Connection),
  Vacancy: new VacancyQuery(Connection)
};