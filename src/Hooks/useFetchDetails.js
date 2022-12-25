import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/movies-api';

const useFetchDetails = () => {
  const [details, setDetails] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieDetails(movieId).then(setDetails);
  }, [movieId]);

  return details;
};

export default useFetchDetails;
