const express = require('express');
const UserRouter = require('./UserRouter');
const QuestionRouter = require('./QuestionRouter');
const AnswerRouter = require('./AnswerRouter');
const VacancyRouter = require('./VacancyRouter');
const ShopRouter = require('./ShopRouter');

const router = express.Router();

router.use('/users', UserRouter);
router.use('/questions', QuestionRouter);
router.use('/answers', AnswerRouter);
router.use('/vacancies', VacancyRouter);
router.use('/shop', ShopRouter);

module.exports = router;