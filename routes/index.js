const express = require('express'),
router = express.Router();
const db = require('../queries');


/* GET home page. */
router.get('/home', db);

module.exports = router;
