const { Question } = require('../database/index');

class QuestionController {
  async getAll(req, res) {
    try {
      const questions = await Question.getAll();
      res.json({
        success: true,
        message: 'Successfully retrieved questions list!',
        amount: questions.length,
        data: questions
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Unknown error occurred while getting questions list!',
        errors: ['Unknown error!']
      });
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const question = await Question.getById(id);
      res.json({
        success: true,
        message: 'Successfully retrieved one question!',
        data: question
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Unknown error occurred while getting question!',
        errors: ['Unknown error!']
      });
    }
  }

  async create(req, res) {
    try {
      const { title, text, user_id, difficulty } = req.body;
      const newQuestion = await Question.create({ title, text, user_id, difficulty });
      res.json({
        success: true,
        message: 'Successfully added question to database!',
        data: newQuestion
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Unknown error occurred while inserting question to database!',
        errors: ['Unknown error!']
      });
    }
  }
}

module.exports = new QuestionController();