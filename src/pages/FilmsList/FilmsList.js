import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchTrending } from '../../service/api';

export default function TrendFilmsList() {
  const [films, setFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrending()
      .then(films => {
        setFilms(films.results);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {films.map(({ original_title, id }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {original_title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
