var request = require('request-promise-native');
var tmbdKey = process.env.TMBD_KEY; 

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

module.exports = {
  fetchAction,
  fetchScienceFiction,
  fetchAnimation,
  fetchComedy,
  fetchCrime,
  fetchFantasy
}
