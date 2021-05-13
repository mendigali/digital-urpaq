const { Vacancy } = require('../database/index');

class VacancyController {
  async getAll(req, res) {
    try {
      const vacancies = await Vacancy.getAll();
      res.json({
        success: true,
        message: 'Successfully retrieved vacancies list!',
        amount: vacancies.length,
        data: vacancies
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Unknown error occurred while getting list of vacancies!',
        errors: ['Unknown error!']
      });
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const vacancy = await Vacancy.getById(id);
      res.json({
        success: true,
        message: 'Successfully retrieved one vacancy!',
        data: vacancy
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Unknown error occurred while vacancy!',
        errors: ['Unknown error!']
      });
    }
  }

  async create(req, res) {
    try {
      const {
        is_internship,
        is_fulltime,
        is_visible = true,
        user_id,
        experience_required,
        title,
        description,
        location,
        salary_min,
        salary_max
      } = req.body;
      const newVacancy = await Vacancy.create({
        is_internship,
        is_fulltime,
        is_visible,
        user_id,
        experience_required,
        title,
        description,
        location,
        salary_min,
        salary_max
      });
      res.json({
        success: true,
        message: 'Vacancy successfully added!',
        data: newVacancy
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Unknown error occurred while adding vacancy to the database!',
        errors: ['Unknown error!']
      });
    }
  }
}

module.exports = new VacancyController();