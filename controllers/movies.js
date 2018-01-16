var request = require('request-promise-native');
var tmdbKey = process.env.TMDB_KEY; 

function fetchAction (req, res) {
  request(`https://api.themoviedb.org/3/discover/movie?api_key=${tmdbKey}&language=en-US&include_adult=false&with_genres=28`,function (error, tmdbResponse) {
    var tmdbBody = JSON.parse(tmdbResponse.body)
    var movies = tmdbBody.results;
    res.json(movies)
  })
}

function fetchScienceFiction (req, res) {
  request(`https://api.themoviedb.org/3/discover/movie?api_key=${tmdbKey}&language=en-US&include_adult=false&with_genres=878`,function (error, tmdbResponse) {
    var tmdbBody = JSON.parse(tmdbResponse.body)
    var movies = tmdbBody.results;
    res.json(movies)
  })
}

function fetchAnimation (req, res) {
  request(`https://api.themoviedb.org/3/discover/movie?api_key=${tmdbKey}&language=en-US&include_adult=false&with_genres=16`,function (error, tmdbResponse) {
    var tmdbBody = JSON.parse(tmdbResponse.body)
    var movies = tmdbBody.results;
    res.json(movies)
  })
}

function fetchComedy (req, res) {
  request(`https://api.themoviedb.org/3/discover/movie?api_key=${tmdbKey}&language=en-US&include_adult=false&with_genres=35`,function (error, tmdbResponse) {
    var tmdbBody = JSON.parse(tmdbResponse.body)
    var movies = tmdbBody.results;
    res.json(movies)
  })
}

function fetchCrime (req, res) {
  request(`https://api.themoviedb.org/3/discover/movie?api_key=${tmdbKey}&language=en-US&include_adult=false&with_genres=80`,function (error, tmdbResponse) {
    var tmdbBody = JSON.parse(tmdbResponse.body)
    var movies = tmdbBody.results;
    res.json(movies)
  })
}

function fetchFantasy (req, res) {
  request(`https://api.themoviedb.org/3/discover/movie?api_key=${tmdbKey}&language=en-US&include_adult=false&with_genres=14`,function (error, tmdbResponse) {
    var tmdbBody = JSON.parse(tmdbResponse.body)
    var movies = tmdbBody.results;
    res.json(movies)
  })
}

function fetchMovies1 (req, res) {
  request(`https://api.themoviedb.org/3/discover/movie?api_key=${tmdbKey}&language=en-US&include_adult=false&with_genres=${req.params.id}`,function (error, tmdbResponse) {
    var tmdbBody = JSON.parse(tmdbResponse.body)
    var movies1 = tmdbBody.results;
    res.json(movies1)
  })
}

function fetchMovies2 (req, res) {
  request(`https://api.themoviedb.org/3/discover/movie?api_key=${tmdbKey}&language=en-US&include_adult=false&page=2&with_genres=${req.params.id}`,function (error, tmdbResponse) {
    var tmdbBody = JSON.parse(tmdbResponse.body)
    var movies2 = tmdbBody.results;
    res.json(movies2)
  })
}

function fetchMovies3 (req, res) {
  request(`https://api.themoviedb.org/3/discover/movie?api_key=${tmdbKey}&language=en-US&include_adult=false&page=3&with_genres=${req.params.id}`,function (error, tmdbResponse) {
    var tmdbBody = JSON.parse(tmdbResponse.body)
    var movies3 = tmdbBody.results;
    res.json(movies3)
  })
}

function fetchGenre (req, res) {
  request(`https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=${tmdbKey}`,function (error, tmdbResponse) {
    var tmdbBody = JSON.parse(tmdbResponse.body)
    var genres = tmdbBody.genres;
    var genre = genres.find(genre => genre.id === Number(req.params.id)).name
    res.json(genre)
  })
}

function fetchPopular (req, res) {
  request(`https://api.themoviedb.org/3/movie/popular?api_key=${tmdbKey}&language=en-US&include_adult=false`,function (error, tmdbResponse) {
    var tmdbBody = JSON.parse(tmdbResponse.body)
    var movies = tmdbBody.results;
    res.json(movies);
  })
}

function fetchMovie (req, res) {
  request(`https://api.themoviedb.org/3/movie/${req.params.id}?api_key=${tmdbKey}&language=en-US`,function (error, tmdbResponse) {
    var tmdbBody = JSON.parse(tmdbResponse.body)
    var movie = tmdbBody;
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
