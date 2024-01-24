const express = require('express');
const router = express.Router();
const riverController = require('../controllers/riverController');

router.get('/', riverController.getRivers);

module.exports = router;