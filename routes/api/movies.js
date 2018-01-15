var express = require('express');
var router = express.Router();
var moviesCtrl = require('../../controllers/movies');

router.get('/toprated', moviesCtrl.topRated);

module.exports = router;