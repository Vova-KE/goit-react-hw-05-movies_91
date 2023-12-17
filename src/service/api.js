export const BASE_URL = 'https://image.tmdb.org/t/p/w500';
const URL = 'https://api.themoviedb.org/';
const API_KEY = '198c371ef9761c2b05114fb18e86d2f5';
const searchParams = new URLSearchParams({
  language: 'en-US',
});

export async function fetchTrending() {
  const res = await fetch(`${URL}3/trending/movie/day?api_key=${API_KEY}`);
  const info = await res.json();
  return info;
}

export async function fetchMovieDetails(id) {
  const res = await fetch(
    `${URL}3/movie/${id}?api_key=${API_KEY}&${searchParams}`
  );
  const info = await res.json();
  return info;
}

export async function fetchMovieActors(id) {
  const res = await fetch(
    `${URL}3/movie/${id}/credits?api_key=${API_KEY}&${searchParams}`
  );
  const info = await res.json();
  return info;
}

export async function fetchReviews(id) {
  const res = await fetch(
    `${URL}3/movie/${id}/reviews?api_key=${API_KEY}&${searchParams}&page=1`
  );
  const info = await res.json();
  return info;
}

export async function fetchSearchMovie(value) {
  const res = await fetch(
    `${URL}3/search/movie?api_key=${API_KEY}&${searchParams}&query=${value}&page=1&include_adult=false`
  );
  const info = await res.json();
  return info;
}
