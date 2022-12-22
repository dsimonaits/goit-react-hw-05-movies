import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/movies-api';

const useFetchCast = () => {
  const firstRender = useRef(true);
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    fetchMovieCast(movieId).then(setCast);
  }, [movieId]);

  return cast;
};

export default useFetchCast;
