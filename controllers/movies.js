var request = require('request-promise-native');
var tmbdKey = process.env.TMBD_KEY; 

function topRated (req, res) {
  request(`https://api.themoviedb.org/3/movie/top_rated?api_key=${tmbdKey}&language=en-US&include_adult=false`,function (error, tmbdResponse) {
    var tmbdBody = JSON.parse(tmbdResponse.body)
    var movies = tmbdBody.results;
    res.json(movies)
  })
}

module.exports = {
  topRated
}
