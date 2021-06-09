import axios from 'axios';
import questionAPI from './QuestionAPI';
import shopAPI from './ShopAPI';
import answerAPI from './AnswerAPI';
import userAPI from './UserAPI';
import newsAPI from './NewsAPI';
import vacancyAPI from './VacancyAPI';

const server = axios.create({
  baseURL: 'http://localhost:7000/'
});

const QuestionAPI = new questionAPI(server);
const ShopAPI = new shopAPI(server);
const AnswerAPI = new answerAPI(server);
const UserAPI = new userAPI(server);
const NewsAPI = new newsAPI(server);
const VacancyAPI = new vacancyAPI(server);

export {
  QuestionAPI,
  ShopAPI,
  AnswerAPI,
  UserAPI,
  NewsAPI,
  VacancyAPI
};