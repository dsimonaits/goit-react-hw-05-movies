import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/movies-api';

const useFetchDetails = () => {
  const firstRender = useRef(true);
  const [details, setDetails] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    fetchMovieDetails(movieId).then(setDetails);
  }, [movieId]);

  return details;
};

export default useFetchDetails;
