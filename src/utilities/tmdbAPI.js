function fetchTopRated(){
  return(
    fetch('/api/movies/toprated',)
    .then(res => res.json())
  )
}

export default {
  fetchTopRated
};