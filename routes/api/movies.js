var express = require('express');
var router = express.Router();
var moviesCtrl = require('../../controllers/movies');

router.get('/action', moviesCtrl.fetchAction);
router.get('/sciencefiction', moviesCtrl.fetchScienceFiction);
router.get('/animation', moviesCtrl.fetchAnimation);
router.get('/comedy', moviesCtrl.fetchComedy);
router.get('/crime', moviesCtrl.fetchCrime);
router.get('/fantasy', moviesCtrl.fetchFantasy);

module.exports = router;