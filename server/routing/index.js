const express = require('express');
const sumController = require('./sum/sum.js');

const router = express.Router();

router.get('/sum', sumController.getLastSum);
router.post('/sum', sumController.postSum);

module.exports = router;