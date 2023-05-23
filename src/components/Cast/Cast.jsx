import fetchQuery from 'Api/API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ListCast, ItemCast, ItemCastText, ImgCast } from './Cast.styled';
import defaultImg from '../../Images/default-avatar.png';

const Cast = () => {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  const QUERY_URL = `/movie/${movieId}/credits`;

  useEffect(() => {
    fetchQuery(QUERY_URL)
      .then(res => {
        setCast(res.cast);
      })
      .catch(error => console.log(error));
  }, [QUERY_URL]);

  return (
    <>
      {cast.length === 0 ? (
        'We do not have this information yet'
      ) : (
        <ListCast>
          {cast.map(({ original_name, profile_path, character, id }) => (
            <ItemCast key={id}>
              <ImgCast
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : defaultImg
                }
                alt={original_name}
              />
              <ItemCastText>
                <strong>{original_name}</strong>
              </ItemCastText>
              <ItemCastText>Role: {character} </ItemCastText>
            </ItemCast>
          ))}
        </ListCast>
      )}
    </>
  );
};

export default Cast;
