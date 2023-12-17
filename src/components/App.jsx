import { Routes, Route } from 'react-router-dom';

import Container from './Container/Container';
import AppBar from './AppBar/AppBar';

import FilmsList from 'pages/FilmsList/FilmsList';
import Movies from '../pages/Movies/Movies';
import MovieDetails from '../pages/MovieDetails/MovieDetails';
import NotFound from '../pages/NotFound/NotFound';
import Cast from '../pages/Cast/Cast';
import Reviews from '../pages/Reviews/Reviews';

export const App = () => {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" element={<FilmsList />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Container>
  );
};
