import { fetchMovieDetails, BASE_URL } from '../../service/api';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import style from './style.module.css';
import image from '../../images/defaultImage.jpg';

export default function MovieDetails() {
  const [info, setInfo] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieDetails(movieId).then(info => {
      setInfo(info);
    });
  }, [movieId]);

  const getGenres = () => {
    if (info === '') {
      return;
    }
    return info.genres.map(g => g.name).join(' ');
  };

  const { poster_path, title, original_title, vote_average, overview } = info;
  const location = useLocation();
  const cameBack = location.state?.from ?? '/';
  return (
    <div>
      <div className={style.container}>
        <Link to={cameBack}>Go back</Link>

        <div className={style.card}>
          <img
            src={poster_path ? BASE_URL + poster_path : image}
            alt={title}
            className={style.card_img}
          />

          <div>
            <h1>{original_title}</h1>
            <p>User Score: {vote_average}</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h3>Genres</h3>
            <p>{getGenres()}</p>
          </div>
        </div>
      </div>
      {/* <p className={style.movie_add_info}>Additional information</p> */}
      <ul>
        <li>
          <Link to="cast" state={{ from: cameBack }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: cameBack }}>
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
