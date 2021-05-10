const express = require('express');
const { VacancyController } = require('../controllers/index');

const router = express.Router();

router.get('/', VacancyController.getAll);
router.get('/:id', VacancyController.getOne);
router.post('/', VacancyController.create);

module.exports = router;