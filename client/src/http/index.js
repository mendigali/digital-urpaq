import axios from 'axios';
import questionAPI from './QuestionAPI';
import shopAPI from './ShopAPI';
import answerAPI from './AnswerAPI';
import userAPI from './UserAPI';
import newsAPI from './NewsAPI';

const server = axios.create({
  baseURL: 'http://localhost:5000/'
});

const QuestionAPI = new questionAPI(server);
const ShopAPI = new shopAPI(server);
const AnswerAPI = new answerAPI(server);
const UserAPI = new userAPI(server);
const NewsAPI = new newsAPI(server);

export {
  QuestionAPI,
  ShopAPI,
  AnswerAPI,
  UserAPI,
  NewsAPI
};