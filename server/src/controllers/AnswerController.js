const { Answer } = require('../database/index');

class AnswerController {
  async getAll(req, res) {
    try {
      const answers = await Answer.getAll();
      res.json({
        message: 'Successfully retrieved answers list!',
        amount: answers.length,
        data: answers
      });
    } catch (error) {
      res.status(500).json({message: 'Unknown error occurred while getting answers list!'});
    }
  }

  async create(req, res) {
    try {
      const { question_id, user_id, text } = req.body;
      const newAnswer = await Answer.create({ question_id, user_id, text });
      res.json({
        message: 'Successfully added answer to the database!',
        data: newAnswer
      });
    } catch (error) {
      res.status(500).json({message: 'Unknown error occurred while adding answer to the database!'});
    }
  }
}

module.exports = new AnswerController();