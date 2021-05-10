const express = require('express');
const UserRouter = require('./UserRouter');
const QuestionRouter = require('./QuestionRouter');
const AnswerRouter = require('./AnswerRouter');
const VacancyRouter = require('./VacancyRouter');

const router = express.Router();

router.use('/users', UserRouter);
router.use('/questions', QuestionRouter);
router.use('/answers', AnswerRouter);
router.use('/vacancies', VacancyRouter);

module.exports = router;