import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/movies-api';

const useFetchReviews = () => {
  const firstRender = useRef(true);
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return reviews;
};

export default useFetchReviews;
