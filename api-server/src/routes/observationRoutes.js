const express = require('express');
const router = express.Router();
const observationController = require('../controllers/observationController');

router.get('/', observationController.getObservations);

module.exports = router;