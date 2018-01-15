function fetchAction() {
  return (
    fetch('/api/movies/action')
    .then(res => res.json())
  )
}

function fetchScienceFiction() {
  return (
    fetch('/api/movies/sciencefiction')
    .then(res => res.json())
  )
}

function fetchAnimation() {
  return (
    fetch('/api/movies/animation')
    .then(res => res.json())
  )
}

function fetchComedy() {
  return (
    fetch('/api/movies/comedy')
    .then(res => res.json())
  )
}

function fetchCrime() {
  return (
    fetch('/api/movies/crime')
    .then(res => res.json())
  )
}

function fetchFantasy() {
  return (
    fetch('/api/movies/fantasy')
    .then(res => res.json())
  )
}

export default {
  fetchAction,
  fetchScienceFiction,
  fetchAnimation,
  fetchComedy,
  fetchCrime,
  fetchFantasy
};