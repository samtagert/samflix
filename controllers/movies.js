var request = require('request-promise-native');
var tmbdKey = process.env.TMBD_KEY; 

// create 1 more request for each with page=2 for more results on the genre page

function fetchAction (req, res) {
  request(`https://api.themoviedb.org/3/discover/movie?api_key=${tmbdKey}&language=en-US&include_adult=false&with_genres=28`,function (error, tmbdResponse) {
    var tmbdBody = JSON.parse(tmbdResponse.body)
    var movies = tmbdBody.results;
    res.json(movies)
  })
}

function fetchScienceFiction (req, res) {
  request(`https://api.themoviedb.org/3/discover/movie?api_key=${tmbdKey}&language=en-US&include_adult=false&with_genres=878`,function (error, tmbdResponse) {
    var tmbdBody = JSON.parse(tmbdResponse.body)
    var movies = tmbdBody.results;
    res.json(movies)
  })
}

function fetchAnimation (req, res) {
  request(`https://api.themoviedb.org/3/discover/movie?api_key=${tmbdKey}&language=en-US&include_adult=false&with_genres=16`,function (error, tmbdResponse) {
    var tmbdBody = JSON.parse(tmbdResponse.body)
    var movies = tmbdBody.results;
    res.json(movies)
  })
}

function fetchComedy (req, res) {
  request(`https://api.themoviedb.org/3/discover/movie?api_key=${tmbdKey}&language=en-US&include_adult=false&with_genres=35`,function (error, tmbdResponse) {
    var tmbdBody = JSON.parse(tmbdResponse.body)
    var movies = tmbdBody.results;
    res.json(movies)
  })
}

function fetchCrime (req, res) {
  request(`https://api.themoviedb.org/3/discover/movie?api_key=${tmbdKey}&language=en-US&include_adult=false&with_genres=80`,function (error, tmbdResponse) {
    var tmbdBody = JSON.parse(tmbdResponse.body)
    var movies = tmbdBody.results;
    res.json(movies)
  })
}

function fetchFantasy (req, res) {
  request(`https://api.themoviedb.org/3/discover/movie?api_key=${tmbdKey}&language=en-US&include_adult=false&with_genres=14`,function (error, tmbdResponse) {
    var tmbdBody = JSON.parse(tmbdResponse.body)
    var movies = tmbdBody.results;
    res.json(movies)
  })
}

function fetchMovies1 (req, res) {
  request(`https://api.themoviedb.org/3/discover/movie?api_key=${tmbdKey}&language=en-US&include_adult=false&with_genres=${req.params.id}`,function (error, tmbdResponse) {
    var tmbdBody = JSON.parse(tmbdResponse.body)
    var movies1 = tmbdBody.results;
    res.json(movies1)
  })
}

function fetchMovies2 (req, res) {
  request(`https://api.themoviedb.org/3/discover/movie?api_key=${tmbdKey}&language=en-US&include_adult=false&page=2&with_genres=${req.params.id}`,function (error, tmbdResponse) {
    var tmbdBody = JSON.parse(tmbdResponse.body)
    var movies2 = tmbdBody.results;
    res.json(movies2)
  })
}

function fetchMovies3 (req, res) {
  request(`https://api.themoviedb.org/3/discover/movie?api_key=${tmbdKey}&language=en-US&include_adult=false&page=3&with_genres=${req.params.id}`,function (error, tmbdResponse) {
    var tmbdBody = JSON.parse(tmbdResponse.body)
    var movies3 = tmbdBody.results;
    res.json(movies3)
  })
}

function fetchGenre (req, res) {
  request(`https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=${tmbdKey}`,function (error, tmbdResponse) {
    var tmbdBody = JSON.parse(tmbdResponse.body)
    var genres = tmbdBody.genres;
    var genre = genres.find(genre => genre.id === Number(req.params.id)).name
    res.json(genre)
  })
}

function fetchPopular (req, res) {
  request(`https://api.themoviedb.org/3/movie/popular?api_key=${tmbdKey}&language=en-US&include_adult=false`,function (error, tmbdResponse) {
    var tmbdBody = JSON.parse(tmbdResponse.body)
    var movies = tmbdBody.results;
    res.json(movies);
  })
}

function fetchMovie (req, res) {
  console.log('FETCH MOVIE HIT')
  request(`https://api.themoviedb.org/3/movie/${req.params.id}?api_key=${tmbdKey}&language=en-US`,function (error, tmbdResponse) {
    var tmbdBody = JSON.parse(tmbdResponse.body)
    var movie = tmbdBody;
    res.json(movie);
  })
}

module.exports = {
  fetchAction,
  fetchScienceFiction,
  fetchAnimation,
  fetchComedy,
  fetchCrime,
  fetchFantasy,
  fetchGenre,
  fetchPopular,
  fetchMovie,
  fetchMovies1,
  fetchMovies2,
  fetchMovies3
}
