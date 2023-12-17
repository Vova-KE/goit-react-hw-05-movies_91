import { fetchReviews } from '../../service/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews(movieId).then(info => {
      return setReviews(info.results);
    });
  }, [movieId]);

  return reviews.length < 1 ? (
    <p>There is no reviews</p>
  ) : (
    <ul>
      {reviews.map(({ author, content, id }) => (
        <li key={id}>
          <h2>Author: {author}</h2>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
}
