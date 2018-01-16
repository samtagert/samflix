var express = require('express');
var router = express.Router();
var moviesCtrl = require('../../controllers/movies');

router.get('/:id', moviesCtrl.fetchMovie);
router.get('/action', moviesCtrl.fetchAction);
router.get('/sciencefiction', moviesCtrl.fetchScienceFiction);
router.get('/animation', moviesCtrl.fetchAnimation);
router.get('/comedy', moviesCtrl.fetchComedy);
router.get('/crime', moviesCtrl.fetchCrime);
router.get('/fantasy', moviesCtrl.fetchFantasy);
router.get('/popular', moviesCtrl.fetchPopular);
router.get('/genre/:id', moviesCtrl.fetchGenre);
router.get('/genre/1/:id', moviesCtrl.fetchMovies1);
router.get('/genre/2/:id', moviesCtrl.fetchMovies2);
router.get('/genre/3/:id', moviesCtrl.fetchMovies3);

module.exports = router;