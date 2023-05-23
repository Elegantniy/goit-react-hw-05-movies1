import fetchQuery from 'Api/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

  const QUERY_URL = `/movie/${movieId}/reviews`;

  useEffect(() => {
    fetchQuery(QUERY_URL)
      .then(res => {
        setMovieReviews(res.results);
      })
      .catch(error => console.log(error));
  }, [QUERY_URL]);

  return (
    <div>
      {movieReviews.length === 0 ? (
        'We don`t have any reviews for this movie'
      ) : (
        <ul>
          {movieReviews.map(({ author, content, id }) => (
            <li key={id}>
              <h4>Author: {author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
