import { Link, useLocation } from 'react-router-dom';

export default function MoviesList({ films }) {
  const location = useLocation();

  return (
    <ul>
      {films.map(({ original_title, id }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
