import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { fetchSearchMovie } from '../../service/api';

export default function Movies() {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(searchParams.get('query') ?? '');
  const location = useLocation();
  const query = searchParams.get('query') ?? '';

  const onFormSubmit = e => {
    e.preventDefault();
    if (value === '') {
      return alert('You try found empty string');
    }
    setSearchParams({ query: value });
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    fetchSearchMovie(query)
      .then(info => {
        if (!info.total_results) {
          return alert(`Sorry we don't found ${query}`);
        }
        setFilms(info.results);
      })
      .catch(error => console.log(error));
  }, [query]);

  const handleInputChange = e => {
    setValue(e.target.value);
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input type="text" value={value} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {films.map(({ original_title, id }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {original_title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
