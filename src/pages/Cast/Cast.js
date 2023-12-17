import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieActors, BASE_URL } from '../../service/api';
import defaultImage from '../../images/defaultImage.jpg';

export default function Cast() {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetchMovieActors(movieId)
      .then(({ cast }) => {
        return setActors(cast);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  const getActors = () => {
    if (actors.length < 1) {
      return;
    }
    return actors.map(({ profile_path, name, character, id }) => (
      <li key={id}>
        <div>
          <img
            src={profile_path ? BASE_URL + profile_path : defaultImage}
            alt={name}
          />
        </div>
        <div>
          {name}
          <p>Character: {character}</p>
        </div>
      </li>
    ));
  };

  return <ul>{getActors()}</ul>;
}
