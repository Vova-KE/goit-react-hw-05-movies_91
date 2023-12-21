import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieActors, BASE_URL } from '../../service/api';
import defaultImage from '../../images/defaultImage.jpg';
import style from './style.module.css';

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
      <li key={id} className={style.actor_item}>
        <div className={style.img_box}>
          <img
            src={profile_path ? BASE_URL + profile_path : defaultImage}
            alt={name}
            className={style.img_actors}
          />
        </div>
        <div className={style.text_box}>
          {name}
          <p>Character: {character}</p>
        </div>
      </li>
    ));
  };

  return <ul className={style.actors_list}>{getActors()}</ul>;
}
