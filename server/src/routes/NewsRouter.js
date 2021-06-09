const express = require('express');
const { NewsController } = require('../controllers/index');

const router = express.Router();

router.get('/', NewsController.getAll);
router.get('/:id', NewsController.getOne);
router.post('/', NewsController.create);

module.exports = router;